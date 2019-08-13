import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import _debounce from 'lodash.debounce';
import BlogPost from './BlogPost';

const blogList = (props) => {
  const [posts, setPosts] = useState([]);
  let blogSwiper;

  async function getPostData() {
    const result = await axios.get('https://blog.ie-sd.com/wp-json/wp/v2/posts?_embed');
    setPosts(result.data);

    blogSwiper = new Swiper('.blog-swiper', {
      slidesPerColumn: 2,
      slidesPerColumnFill: result.data.length < 8 ? 'row' : 'column',
    });

    resizeGrid();
  }

  const resizeGrid = () => {
    if (window.innerWidth < 900) {
      blogSwiper.params.slidesPerView = 2;
      blogSwiper.params.spaceBetween = 30;
    } else if (window.innerWidth < 1200) {
      blogSwiper.params.slidesPerView = 3;
      blogSwiper.params.spaceBetween = 0;
    } else {
      blogSwiper.params.slidesPerView = 4;
      blogSwiper.params.spaceBetween = 0;
    }
    blogSwiper.update();
  };

  useEffect( () => {
    getPostData();
  }, []);

  useEffect(() => {
    const handleResize = _debounce(resizeGrid);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="bloglist" className="grid-container">
      <div className="swiper-container blog-swiper leader-3">
        <div className="swiper-wrapper">
          {posts.map((post) => (
            <BlogPost key={post.slug} postData={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default blogList;
