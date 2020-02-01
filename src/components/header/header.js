//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./_header.scss"

const Header = ({ siteTitle }) => (
  <header
  >
    <div className="header"
    >
      <h1 className="header__title">Reliable, efficient delivery</h1>
      <h2 className="header__subTitle">Powered by Technology</h2>
      <p className="header__copy">Our Artificial Intelligence powered tools use millions of project data points 
      to ensure that your project is successful</p>
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
