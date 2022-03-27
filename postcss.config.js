module.exports = {
  plugins: [
    require('cssnano'),
    require('autoprefixer'),
    require('postcss-font-magician')({}),
  ],
};
