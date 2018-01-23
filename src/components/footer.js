import React from 'react';
import Link from 'gatsby-link';
import NavLinks from './nav-links';
import FontAwesome from 'react-fontawesome';

const Footer = () => (
  <footer role="contentinfo" className="site-footer text-center medium-text-right large-text-left">
    <div className="grid-container">
      <nav className="grid-x grid-padding-x grid-padding-y">
        <div className="cell medium-auto">
          <a className="footer-logo media_link" href="http://nyc.gov/planning"><img alt="NYC DCP" src="https://raw.githubusercontent.com/NYCPlanning/logo/master/dcp_logo_772.png" /></a>
        </div>
        <div className="cell medium-shrink">
          <ul className="no-bullet">
            <li><a href="https://twitter.com/nycplanninglabs"><FontAwesome name='twitter' style={{ opacity: '0.8' }} /> @NYCPlanningLabs</a></li>
            <li><a href="mailto:labs_dl@planning.nyc.gov"><FontAwesome name='envelope' style={{ 'opacity': '0.8' }} /> labs_dl@planning.nyc.gov</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
)

export default Footer
