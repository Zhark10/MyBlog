/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./layout.scss"

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`

  let header

  if (location.pathname === rootPath) {
    header = (
      <div className="main-title">
        <AniLink
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
          swipe
          direction="right"
          duration={1}
        >
          <div className="title">{title}</div>
        </AniLink>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <AniLink
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
          swipe
          direction="right"
          duration={1}
        >
          &#8249; {title}
        </AniLink>
      </h3>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Йошкар-Ола
        {` `}
      </footer>
    </div>
  )
}

export default Layout
