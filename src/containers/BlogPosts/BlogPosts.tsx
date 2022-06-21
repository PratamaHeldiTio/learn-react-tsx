import React from "react";
import './BlogPosts.styles.css';
import Post from '../../components/Post'
import { IStateBlogPosts } from './BlogPosts.types'

class BlogPosts extends React.Component<{}, IStateBlogPosts> {
  constructor(props: {}) {
    super(props)
    this.state = {
      posts: []
    }
  }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then((responseJson) => responseJson.json())
     .then((response) => {
        this.setState({
          posts: response
        });
     })
  }
 
  render() {
    return (
      <>
        <p className="title">Blog Post</p>
        {
          this.state.posts.map((post) => {
            return <Post title={ post.title } desc={ post.body } key={ post.id } />
          })
        }
      </>
    );
  }
}

export default BlogPosts;
