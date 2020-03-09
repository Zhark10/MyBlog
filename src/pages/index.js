/* eslint-disable react/no-unescaped-entities */
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

  const date = new Date()
  const currentMonth = date.getMonth()
  const currentMonthToText =
    currentMonth < 10 ? `0${currentMonth}` : currentMonth

  const currentYear = date.getFullYear()

  return (
    <>
      <div id="paper-back">
        <nav>
          <a href="https://vk.com/a.zharavin">Профиль ВК</a>
          <a href="#">Обо мне</a>
          <a href="#">Работа</a>
          <a href="#">Контакты</a>
        </nav>
        <div className="current-date">
          <div className="current-date--month">{currentMonthToText}</div>
          <div className="current-date--year">{currentYear}</div>
        </div>
        <div className="random-text">
          "Еще не придумал, что именно, но уже захотел сюда что-то написать"
          <br />
          <br />© Я
        </div>
      </div>
      <div className={transformStyles}>
        <div
          className="newspaper-to-show-message"
          onClick={toggleHamburgerIcon}
          hidden={hamburgerVisible}
        >
          <div className="newspaper-to-show-message--text">Прочитать</div>
        </div>
        <Layout location={location} title={siteTitle}>
          <div className="hamburger" onClick={toggleHamburgerIcon}>
            &#9736;
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
