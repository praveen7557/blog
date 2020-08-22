import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container ">
      <div className="container">
        <Link to="/" className="brand">
          {siteTitle}
        </Link>
        <Link to="/posts" className="nav-link">
          Posts
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
