import React from 'react';
import sanitizeHtml from 'sanitize-html';

const blogPost = (props) => {
  const imageURL = props.postData.featured_media ?
   props.postData._embedded["wp:featuredmedia"][0].source_url : "";

  return (
    <div className = "blog-preview">
      <div className = "blog-preview-header">
        <img src = {imageURL} className = "blog-preview-image" />
        <div className = "blog-preview-category">{props.postData._embedded['wp:term'][0][0].slug}</div>
      </div>
      <div className = "blog-preview-content">
        <div className = "blog-preview-title">{props.postData.title.rendered}</div>
        <div className = "blog-preview-author">
          {props.postData._embedded.author[0].name} /
          <span className = "blog-preview-date">
            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
                .format(new Date(props.postData.date))}</span>
        </div>
        {sanitizeHtml(props.postData.excerpt.rendered, {allowedTags: []})}
        <div className="full-article-button yellow-red">read this article</div>
      </div>
      
    </div>
  );
};

export default blogPost;
