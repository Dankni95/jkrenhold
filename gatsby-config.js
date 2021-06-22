module.exports = {
  siteMetadata: {
    title: "jkrenhold",
  }
};
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}



module.exports = {
  plugins: [`gatsby-plugin-gatsby-cloud`]
}

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
