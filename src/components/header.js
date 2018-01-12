import React from 'react';
import Link from 'gatsby-link';
import NavLinks from './nav-links';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };

  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    })
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <header role="banner" className="site-header">
        <a className="show-on-focus" href="#main">Skip to main content</a>
        <a href="https://planninglabs.nyc/" className="labs-beta-notice hide-for-print">A beta project of NYC Planning Labs</a>
        <div className="grid-x grid-padding-x">
          <div className="branding cell shrink large-auto">
            <a className="dcp-link" href="http://www1.nyc.gov/site/planning/index.page"><img className="dcp-logo" src="https://raw.githubusercontent.com/NYCPlanning/logo/master/dcp_logo_772.png" alt="NYC Planning" /></a>
            <Link to="/" className="site-name">
              GeoSearch <small className="site-subtitle show-for-medium">Authoritative <span className="show-for-large">Search</span> Results for N<span className="show-for-large">ew </span>Y<span className="show-for-large">ork </span>C<span className="show-for-large">ity</span> Addresses</small>
            </Link>
          </div>
          <div className="cell auto hide-for-large text-right">
            <button className="responsive-nav-toggler" onClick={() => { this.toggleMenu() }}>Menu</button>
          </div>
          <div id="responsive-menu" onClick={() => {this.closeMenu()}} className={`cell large-shrink ${menuOpen ? '' : 'show-for-large'}`}>
            <nav role="navigation" className="header-nav">
              <NavLinks ulClasses="menu vertical large-horizontal" />
            </nav>
          </div>
        </div>
      </header>
    )
  }
}


export default Header
