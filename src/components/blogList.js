import React, {useState, useEffect} from 'react';
import BlogPost from 'BlogPost';

const blogList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect( async () => {/* API call to retrieve post data */});

  return (
    <div id = "blogList">
      {posts.map((post) => (
        <BlogPost key = {post[slug]} postData = {post} />
      ))}
    </div>
  );
};

export default blogList;
