import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 100) {
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
    <div className="bio-box">
      <div className="biography">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="biography-image"
        />
        <div className="biography-text">
          Меня зовут <strong>{author}</strong>. Скорее всего, ты попал(-а) сюда
          с моего профиля vk, но если это не так, ты всегда можешь найти меня
          {` `}
          <a href={siteUrl}>здесь</a>
        </div>
      </div>
    </div>
  )
}

export default Bio
