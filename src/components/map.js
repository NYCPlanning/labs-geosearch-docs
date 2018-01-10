import React from 'react';
import Link from 'gatsby-link';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import Search from './search';

const MapboxGl = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY3dob25nbnljIiwiYSI6ImNpczF1MXdrdjA4MXcycXA4ZGtyN2x5YXIifQ.3HGyME8tBs6BnljzUVIt4Q"
});


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: null,
      center: [-74.0030685, 40.7335205],
      zoom: [11],
    };
  }

  render() {
    const { selectedFeature } = this.state;
    return (
      <div>
        <Search
          mapzen_api_key='mapzen-ugqm54r'
          onGeocoderSelection={(feature) => {
            this.setState({
              selectedFeature: feature,
              center: feature.geometry.coordinates,
              zoom: [18],
            })
          }}
          bounds={{
            minLon: -74.292297,
            maxLon: -73.618011,
            minLat: 40.477248,
            maxLat: 40.958123,
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
