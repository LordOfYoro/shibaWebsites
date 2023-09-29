import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Les shibas d'Inari`,
    siteUrl: `https://sitewebshiba.netlify.app`
  },
  graphqlTypegen: true,
  plugins: [
  "gatsby-plugin-postcss", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-netlify", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
