import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Hero
          tagline="We work with New York City's Urban Planners to deliver impactful, modern technology tools."
          buttonText="Get in touch"
          buttonURL="/contact/"
          />

        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">

              <h2>Planning + Tech</h2>

              <div className="grid-x grid-margin-x">
                <div className="cell large-auto">
                  <p className="lead">We believe better outcomes can be achieved using modern design and development practices along with open technology. We are civic technologists here to help support the Department of City Planning's mission.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default IndexPage
