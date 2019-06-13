const withCSS = require('@zeit/next-css'),
  withSASS = require('@zeit/next-sass'),
  withImages = require('next-images');

module.exports = withImages(withCSS(withSASS()));
