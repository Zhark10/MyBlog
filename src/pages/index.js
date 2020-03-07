/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

const BlogIndex = ({ data, location }) => {
  const [hamburgerVisible, setHamburgerVisible] = React.useState(false)

  const toggleHamburgerIcon = React.useCallback(() => {
    setHamburgerVisible(current => !current)
  }, [hamburgerVisible])

  let transformStyles = "newspaper"

  if (hamburgerVisible) {
    transformStyles += "--animate"
  }

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <div id="paper-back">
        <nav>
          <div className="close" onClick={toggleHamburgerIcon} />
          <a href="https://vk.com/a.zharavin">Профиль ВК</a>
          <a href="#">Обо мне</a>
          <a href="#">Работа</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
      <div className={transformStyles}>
        <Layout location={location} title={siteTitle}>
          <div className="hamburger" onClick={toggleHamburgerIcon}>
            <span />
          </div>
          <SEO title="All posts" />
          <Bio animation={hamburgerVisible} />
          <div className="articles">
            {posts.map(({ node }, index) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={index}>
                  <AniLink
                    key={node.fields.slug}
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                    swipe
                    direction="left"
                    duration={1}
                  >
                    <header>
                      <h3>{title}</h3>
                    </header>
                    <section className="article-description">
                      <p
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <img
                        src={node.frontmatter.image}
                        style={{
                          textAlign: "center",
                          width: "100%",
                        }}
                      />
                    </section>
                    <small
                      style={{
                        color: "#000",
                      }}
                    >
                      {node.frontmatter.date}
                    </small>
                  </AniLink>
                </article>
              )
            })}
          </div>
        </Layout>
      </div>
    </>
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
            image
          }
        }
      }
    }
  }
`
