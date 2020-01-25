import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link
            key={node.fields.slug}
            style={{ boxShadow: `none` }}
            to={node.fields.slug}
          >
            <article
              style={{
                // border: '1px solid #007acc',
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                // boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                margin: "32px 0",
                cursor: "pointer",
              }}
            >
              <header
                style={{
                  display: "flex",
                  padding: "16px",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #007acc",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
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
            </article>
          </Link>
        )
      })}
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
