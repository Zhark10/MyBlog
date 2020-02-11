/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "./layout.scss"

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            fontSize: 48,
          }}
          to="/"
        >
          <span
            style={{
              color: "#007acc",
              marginRight: "32px",
            }}
          >
            &#9997;
          </span>{" "}
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to="/"
        >
          &#8656; {title}
        </Link>
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
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
