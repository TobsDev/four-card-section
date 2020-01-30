import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./_header.scss"

const Header = ({ siteTitle }) => (
  <header className="header"
  >
    <div className="header__container"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="header__link"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
