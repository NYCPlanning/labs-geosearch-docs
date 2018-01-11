import React from 'react';
import Link from 'gatsby-link';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import Search from './search';

let MapboxGl = null;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null,
      center: [-74.0030685, 40.7335205],
      zoom: [11],
    };
  }

  componentWillMount() {
    // necessary so that gatsby build will work properly
    if (typeof window !== `undefined`) {
      MapboxGl = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q"
      });
    }
  }

  render() {

    // necessary so that gatsby build will work properly
    if (typeof window === `undefined`) { return null; }

    const { selectedFeature } = this.state;

    return (
      <div>
        <Search
          onGeocoderSelection={(feature) => {
            this.setState({
              selectedFeature: feature,
              center: feature.geometry.coordinates,
              zoom: [18],
            })
          }}
          onClear={() => {
            this.setState({ selectedFeature: null })
          }}
        />
        <MapboxGl
          style='mapbox://styles/mapbox/light-v9'
          center={this.state.center}
          zoom={this.state.zoom}
          >
          {selectedFeature && (
            <GeoJSONLayer
              data={selectedFeature}
              circlePaint={{
                'circle-color': 'DodgerBlue',
                'circle-opacity': 0.7,
                'circle-radius': {
                  'stops': [
                    [11, 5],
                    [18, 15],
                  ]
                },
              }}/>
          )}
        </MapboxGl>
      </div>
    )
  }
}

export default Map
