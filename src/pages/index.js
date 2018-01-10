import React from 'react'
import Link from 'gatsby-link'

import Map from '../components/map'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Map />

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
