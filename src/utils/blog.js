import moment from 'moment';

// TODO: Add checks to all functions.
// helper functions
export const getTitle = function(post, length) {
  return post.title > length ?
    post.title.substring(0, length) + '…' :
    post.title;
};

export const getCardImage = function(post) {
  return post.details.cardImage.sourceUrl;
};

export const getExcerpt = function(post, length) {
  const excerpt = post.excerpt.replace('<p>', '').replace('</p>', '');

  return excerpt.length > length ? excerpt.substring(0, length) + '…' : excerpt;
};

export const getAuthor = function(author) {
  return author.firstName + ' ' + author.lastName;
};

export const getDate = function(post) {
  return moment(post.date).format('M/D/Y');
};

export const getLink = function(post) {
  return '/post?id=' + post.postId;
};

export const getHeroImage = function(post) {
  return post.details.heroImage.sourceUrl;
};
