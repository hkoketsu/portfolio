import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import TopNav from '../components/nav/TopNav'
import ResetCSS from '../styles/reset_css'
import NormalizeCSS from '../styles/normalize_css'
import Container from '../components/Container'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <ResetCSS/>
        <NormalizeCSS/>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <TopNav/>
        <Container>
          <main>
            {children}
          </main>
        </Container>
      </>
    )}
  />
)

export default IndexLayout
