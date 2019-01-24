import React from 'react';
import { Link } from 'gatsby';
import FontAwesome from 'react-fontawesome';

const BetaWarning = () => (
  <div className="callout secondary">
    <p className="header-tiny" style={{margin:'0 0 0.5em'}}><FontAwesome name='exclamation-circle' fixedWidth className='warning-color' style={{transform:'scale(1.5)'}} />&nbsp; <strong>NYC GeoSearch is currently in beta</strong></p>
    <p className="text-small">We’re currently testing GeoSearch in various applications and may make unannounced changes. While we welcome you to experiment with this service and <Link to="feedback/"><strong>provide feedback</strong></Link>, it is not yet supported by the <a href="http://nyc.gov/planning">Department of City Planning</a>.</p>
  </div>
)

export default BetaWarning
