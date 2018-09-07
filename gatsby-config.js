module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125431857-1",
        head: true
      }
    }
  ],
  siteMetadata: {
    title: "Akosua Asante",
    description: "Full stack product enginner",
    keywords: "full stack, product enginner, portfolio, personal website",
    url: "https://www.akosua.xyz"
  }
};
