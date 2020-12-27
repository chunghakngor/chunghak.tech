module.exports = {
  siteMetadata: {
    title: "CHUNGHAK.TECH",
    description: "A personal webiste for Chung!!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
