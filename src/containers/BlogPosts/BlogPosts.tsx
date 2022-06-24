import React from 'react';
import axios from 'axios';
import './BlogPosts.styles.css';
import Post from '../../components/Post';
import { IStateBlogPosts } from './BlogPosts.types';

class BlogPosts extends React.Component<{}, IStateBlogPosts> {
  constructor(props: {}) {
    super(props);    
    this.state = {
      posts: [],
      formBlogPost: {
        userId: 1,
        id: 0,
        title: '',
        body: '',
      },
    };
  }
  
  getRestAPI() {
    axios.get(`${process.env.REACT_APP_BASEURL_API}`)
      .then((result) => {
        this.setState({
          posts: result.data,
        });
      });
  }

  componentDidMount() {
    this.getRestAPI();
  }

  handleRemove = (id: number) => {
    axios.delete(`${process.env.REACT_APP_BASEURL_API}${id}`)
      .then(() => {
        this.getRestAPI();
      });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      formBlogPost: {
        ...prevState.formBlogPost,
        title: e.target.value,
      },
    })); 
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState((prevState) => ({
      formBlogPost: {
        ...prevState.formBlogPost,
        body: e.target.value,
      },
    }));
  };

  render() {
    return (
      <>
        <p className="title">Blog Post</p>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add title" onChange={this.handleInputChange} />
          <label htmlFor="body-content">body</label>
          <textarea name="body-content" id="body-content" placeholder="add body content" cols={30} rows={10} onChange={this.handleTextareaChange} />
          <button className="btn-submit">Kirim</button>
        </div>
        {
          this.state.posts.map((post) => {
            return <Post data={post} key={post.id} remove={this.handleRemove} />;
          })
        }
      </>
    );
  }
}

export default BlogPosts;
