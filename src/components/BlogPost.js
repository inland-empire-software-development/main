import React from 'react';
import sanitizeHtml from 'sanitize-html';

const blogPost = (props) => {
  const imageURL = props.postData.featured_media ?
   props.postData._embedded["wp:featuredmedia"][0].source_url : "";
  const category = props.postData._embedded['wp:term'][0][0].slug;

  return (
    <div className = "swiper-slide blog-preview">
      <div className = "blog-preview-header">
        <div className = "blog-preview-image-container">
          <img src = {imageURL} className = "blog-preview-image" />
        </div>
        <div className = "blog-preview-category">
          {category[0].toUpperCase() + category.slice(1)}
        </div>
      </div>
      <div className = "blog-preview-content">
        <div className = "blog-preview-title">
          {props.postData.title.rendered}
        </div>
        <div className = "blog-preview-author">
          {props.postData._embedded.author[0].name}
        </div>
        <div className = "blog-preview-date">
          {new Intl.DateTimeFormat('en-US',
              {year: 'numeric', month: 'long', day: 'numeric'})
              .format(new Date(props.postData.date))}</div>
        <div className = "blog-preview-excerpt">
          {sanitizeHtml(props.postData.excerpt.rendered, {allowedTags: []})}
        </div>
      </div>
      <a href = {props.postData.link}>
        <div className="full-article-button bg-red">
          read this article
        </div>
      </a>
    </div>
  );
};

export default blogPost;
