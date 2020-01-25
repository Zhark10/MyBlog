import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
              textAlign: "center",
              paddingRight: "32px",
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              textAlign: "center",
              paddingRight: "32px",
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ textAlign: "center" }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li
            style={{
              fontSize: "18px",
              fontWeight: "800",
            }}
          >
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                &#8656; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            style={{
              fontSize: "18px",
              fontWeight: "800",
            }}
          >
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} &#8658;
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
