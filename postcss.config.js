module.exports = {
  plugins: [
    // require('cssnano'),
    require('autoprefixer')({
      flexbox: 'no-2009',
      // grid: 'autoplace',
    }),
    require('postcss-font-magician')({
      variants: {
        Inconsolata: {
          '700 bold': ['woff, eot, woff2'],
        },
        'Space Mono': {
          '700 bold': ['woff, eot, woff2'],
          '400 regular': ['woff, eot, woff2'],
        },
      },
    }),
  ],
};
