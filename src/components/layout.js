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
          cover
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
          direction="right"
          duration={1}
          bg="
                  url(http://cdn02.overnature.net/1920/158-grama.jpg)
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
        >
          <div className="title">{title}</div>
          <div className="author-name">
            <span>Жаравина</span>
            <span>Аркадия</span>
          </div>
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
          cover
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
          direction="right"
          duration={1}
          bg="
                  url(http://cdn02.overnature.net/1920/158-grama.jpg)
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
        >
          &#8656; {title}
        </AniLink>
      </h3>
    )
  }
  return (
    <div
      style={{
        backgroundColor: "#f9f7f1",
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
