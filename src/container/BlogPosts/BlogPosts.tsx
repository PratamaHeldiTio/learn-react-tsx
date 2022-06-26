import React from 'react';
import axios from 'axios';
import './BlogPosts.styles.css';
import Post from '../../components/Post';
import { 
  IStateBlogPosts, 
  DefaultState,
  BlogPostItem,
} from './BlogPosts.types';

class BlogPosts extends React.Component<{}, IStateBlogPosts> {
  constructor(props: {}) {
    super(props);    
    this.state = {
      posts: [],
      formBlogPost: DefaultState,
      isUpdate: false,
    };
  }
  
  getRestAPI(): void {
    axios.get(`${process.env.REACT_APP_BASEURL_API}?_sort=id&_order=desc`)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
      });
  }

  postDataAPIHandler = (): void => {
    axios.post(`${process.env.REACT_APP_BASEURL_API}`, this.state.formBlogPost)
      .then((response) => {
        console.log(response);
        this.getRestAPI();
        this.setState({
          formBlogPost: DefaultState,
        });
      
      })
      .catch((err) => console.log('error', err)); 
  };

  putDataAPIHandler(id: number): void {
    axios.put(`${process.env.REACT_APP_BASEURL_API}${id}`, this.state.formBlogPost)
      .then((response) => {
        console.log(response);
        this.getRestAPI();
        this.setState({
          formBlogPost: DefaultState,
        });
      })
      .catch((err) => console.log('error', err)); 
  }

  componentDidMount() {
    this.getRestAPI();
  }

  handleRemove = (id: number): void => {
    axios.delete(`${process.env.REACT_APP_BASEURL_API}${id}`)
      .then(() => {
        this.getRestAPI();
      });
  };


  handleUpdate = (data: BlogPostItem): void => {
    this.setState({
      formBlogPost: data,
    });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((prevState) => ({
      formBlogPost: {
        ...prevState.formBlogPost,
        title: e.target.value,
      },
    })); 
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState((prevState) => ({
      formBlogPost: {
        ...prevState.formBlogPost,
        body: e.target.value,
      },
    }));
  };

  handleSubmit = (): void => {
    if (this.state.isUpdate) {
      this.putDataAPIHandler(this.state.formBlogPost.id);
    } else {
      const id = + new Date();
      this.setState((prevState) => ({
        formBlogPost: {
          ...prevState.formBlogPost,
          id: id,
        },
      }), () => {
        this.postDataAPIHandler();
      }); 
    }
  };

  render() {
    return (
      <>
        <p className="title">Blog Post</p>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title" 
            value={this.state.formBlogPost.title} 
            placeholder="Add Title" 
            onChange={this.handleInputChange} 
          />
          <label htmlFor="body-content">body</label>
          <textarea 
            name="body-content" 
            id="body-content" 
            value={this.state.formBlogPost.body} 
            placeholder="Add Body Content"
            cols={30} 
            rows={10} 
            onChange={this.handleTextareaChange} 
          />
          <button className="btn-submit" onClick={this.handleSubmit}>Kirim</button>
        </div>
        {
          this.state.posts.map((post) => {
            return <Post data={post} key={post.id} remove={this.handleRemove} update={this.handleUpdate} />;
          })
        }
      </>
    );
  }
}

export default BlogPosts;
