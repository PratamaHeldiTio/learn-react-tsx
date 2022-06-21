import React from "react";
import axios from 'axios'
import './BlogPosts.styles.css';
import Post from '../../components/Post'
import { IStateBlogPosts } from './BlogPosts.types'

class BlogPosts extends React.Component<{}, IStateBlogPosts> {
  constructor(props: {}) {
    super(props)
    this.state = {
      posts: []
    }

    this.handlerRemove = this.handlerRemove.bind(this)
  }
  
  getRestAPI() {
    axios.get(`${process.env.REACT_APP_BASEURL_API}`)
    .then((result) => {
      this.setState({
        posts: result.data
      })
    });
  }

  componentDidMount() {
    this.getRestAPI()
  }

  handlerRemove(id: number) {
    axios.delete(`${process.env.REACT_APP_BASEURL_API}${id}`)
    .then(() => {
      this.getRestAPI()
    })
  }

  render() {
    return (
      <>
        <p className="title">Blog Post</p>
        {
          this.state.posts.map((post) => {
            return <Post data={post} key={post.id} remove={this.handlerRemove} />
          })
        }
      </>
    );
  }
}

export default BlogPosts;
