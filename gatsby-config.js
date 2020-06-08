module.exports = {
  plugins: [
    {
      resolve: `@hangindev/gatsby-theme-courses`,
      options: {
        contentPath: 'content/courses',
      },
    },
  ],
  siteMetadata: {
    title: `Henrique Silva Dev`,
    author: `henriquesilvadev`,
    description: `My shared notations and resolutions of the I2A2 course.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/henriquesilvadev`,
      },
    ],
  },
};
