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
          duration={1}
          hex="#404040"
          paintDrip
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
          hex="#404040"
          duration={1}
          paintDrip
        >
          &#8656; {title}
        </AniLink>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          margin: "0 16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        © {new Date().getFullYear()}, Йошкар-Ола
        {` `}
      </footer>
    </div>
  )
}

export default Layout
