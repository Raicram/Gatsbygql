import PropTypes from "prop-types"
import React from "react"
import {HeaderBar,HeaderLogo,StyledLink} from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <HeaderLogo>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
    </HeaderLogo>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
