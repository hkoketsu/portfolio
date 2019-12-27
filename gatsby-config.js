'use strict'

module.exports = {
  siteMetadata: {
    title: 'hkoketsu',
    description: 'A portfolio of Hiroki Koketsu.',
    siteUrl: 'http://hkoketsu.com',
    author: {
      name: 'Hiroki Koketsu',
      url: 'https://www.linkedin.com/in/hkoketsu/',
      email: 'hiroki.koketsu@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://hkoketsu.com'
      }
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-mdx`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hkoketsu',
        short_name: `hkoketsu`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#2772c2`,
        display: `standalone`,
        icon: 'src/img/ocean.jpg'
      },
    },
  ]
}
