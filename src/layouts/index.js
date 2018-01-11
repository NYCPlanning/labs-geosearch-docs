import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import Map from '../components/map';

import '../scss/app.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="NYC GeoSearch"
      meta={[
        { name: 'description', content: 'Autocomplete Search Results for New York City' }
      ]}
    >
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script type="text/javascript"src="js/track.js"></script>
      <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
    </Helmet>

    <Header />

    <div className="main grid-x">
      <div className="cell xlarge-4 xlarge-order-2">
        <Map />
      </div>
      <div className="cell xlarge-8 xlarge-order-1">
        {children()}
        <Footer />
      </div>
    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
