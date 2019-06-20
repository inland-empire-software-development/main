import React, {Component} from 'react';
import BlogPost from 'BlogPost';

class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div id = "blogList">
      </div>
    );
  }
}

export default BlogList;
