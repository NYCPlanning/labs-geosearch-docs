import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

const AboutPage = () => (
  <div className="main">
    <Hero
      title="About Planning Labs"
      tagline="We build open, impactful technology products at the NYC Department of City Planning."
    />
    <div className="grid-container">
     <div className="grid-x grid-padding-x">
      <div className="cell large-8" id="page-content">
      </div>
    </div>
  </div>
</div>
)

export default AboutPage
