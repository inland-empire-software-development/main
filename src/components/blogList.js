import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import _debounce from 'lodash.debounce'
import BlogPost from './blogPost';

const blogList = (props) => {
  const [posts, setPosts] = useState([]);
  let swiper;

  async function getPostData() {
    const result = await axios.get('https://blog.ie-sd.com/wp-json/wp/v2/posts?_embed');
    setPosts(result.data);

    swiper = new Swiper('.swiper-container', {
      slidesPerColumn: 2,
      slidesPerColumnFill: result.data.length < 8 ? 'row' : 'column'
    });

    resizeGrid();
  }

  const resizeGrid = () => {
    if (window.innerWidth < 900) {
      swiper.params.slidesPerView = 2;
      swiper.params.spaceBetween = 30;
    } else if (window.innerWidth < 1200) {
      swiper.params.slidesPerView = 3;
      swiper.params.spaceBetween = 0;
    } else {
      swiper.params.slidesPerView = 4;
      swiper.params.spaceBetween = 0;
    }
    swiper.update();
  }
  
  useEffect( () => {
    getPostData();
  }, []);

  useEffect(() => {
    const handleResize = _debounce(resizeGrid);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div id = "bloglist">
      <div class = "swiper-container">
        <div class = "swiper-wrapper">
          {posts.map((post) => (
            <BlogPost key = {post.slug} postData = {post} />
          ))} 
        </div>
      </div>
    </div>
  );
};

export default blogList; 
