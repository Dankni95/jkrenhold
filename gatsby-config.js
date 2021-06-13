module.exports = {
  siteMetadata: {
    title: "jkrenhold",
  },
  plugins: ["gatsby-plugin-styled-components"],
};

module.exports = {
  plugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`],
}

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}