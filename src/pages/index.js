/* eslint-disable react/no-array-index-key */
import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div className="articles">
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={index}>
              <AniLink
                cover
                key={node.fields.slug}
                style={{ boxShadow: `none` }}
                to={node.fields.slug}
                direction="left"
                duration={1}
                bg="
                  url(http://via.placeholder.com/640x360)
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
              >
                <header
                  style={{
                    display: "flex",
                    padding: "16px",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #000",
                  }}
                >
                  <h3>{title}</h3>
                  <small
                    style={{
                      color: "#000",
                    }}
                  >
                    {node.frontmatter.date}
                  </small>
                </header>
                <section
                  style={{
                    color: "#000",
                    padding: "16px 32px",
                  }}
                >
                  <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </AniLink>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
