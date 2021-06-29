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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "JK Renhold",
        short_name: "jkrenhold.no",
        start_url: `/`,
        background_color: "#6b37bf",
        display: "standalone",
        icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

