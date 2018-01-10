import React from 'react'
import Link from 'gatsby-link'

import Map from '../components/map'

const AboutPage = () => (
  <div className="main">
    <Map />
    <div className="grid-container">
     <div className="grid-x grid-padding-x">
      <div className="cell large-8" id="page-content">
      </div>
    </div>
  </div>
</div>
)

export default AboutPage
