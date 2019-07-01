import React from 'react';

const blogPost = (props) => {
  return (
    <div className = "blog-preview">
      <div className = "blog-preview-header">
        <img src = {props.postData.imageURL} className = "blog-preview-image" />
        <div className = "blog-preview-category">{props.postData.category}</div>
      </div>
      <div className = "blog-preview-content">
        <div className = "blog-post-title">{props.postData.title}</div>
        <div className = "blog-preview-author">{props.postData.author} /
          <span className = "blog-preview-date">{props.postData.date}</span>
        </div>
        {props.postData.description}
        <div className="full-article-button yellow-red">read this article</div>
      </div>
    </div>
  );
};

export default blogPost;
