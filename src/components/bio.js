/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `)

  const { author, siteUrl } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        marginBottom: "16px",
        border: "1px solid #007acc",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
        padding: "16px",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          borderRadius: `100%`,
          minWidth: "60px",
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        Меня зовут <strong>{author}</strong>. Скорее всего, ты попал(-а) сюда с
        моего профиля vk, но если это не так, ты всегда можешь найти меня
        {` `}
        <a href={siteUrl}>здесь</a>
      </div>
    </div>
  )
}

export default Bio
