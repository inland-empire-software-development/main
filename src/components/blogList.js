import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BlogPost from './blogPost';

const blogList = (props) => {
  const [posts, setPosts] = useState([]);

  async function getPostData() {
    const result = await axios.get('https://blog.ie-sd.com/wp-json/wp/v2/posts?_embed');
    console.log(result.data);
    setPosts(result.data);
  }

  useEffect( () => {
    getPostData();
  }, []);

  return (
    <div id = "blogList">
      {posts.map((post) => (
        <BlogPost key = {post.slug} postData = {post} />
      ))} 
    </div>
  );
};

export default blogList;
