import React from 'react';
import Link from 'gatsby-link';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import Search from './search';
import Response from '../components/response';

let MapboxGl = null;
const apiCallNullMessage = 'https://geosearch.planninglabs.nyc/v1/autocomplete?text='
const responseNullMessage = '{}'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCall: apiCallNullMessage,
      response: responseNullMessage,
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

    const { selectedFeature, apiCall, response } = this.state;

    return (
      <div className="grid-x">
        <div className="cell medium-6 xlarge-12" style={{zIndex:'2'}}>
          <div>
            <Search
              onGeocoderSelection={(feature) => {
                this.setState({
                  apiCall: apiCall,
                  selectedFeature: feature,
                  center: feature.geometry.coordinates,
                  zoom: [15.5],
                })
              }}
              onSuggestions={(apiCall) => {
                this.setState({apiCall});
              }}
              onResponse={(response) => {
                this.setState({response});
              }}
              onClear={() => {
                this.setState({
                  selectedFeature: null,
                  apiCall: apiCallNullMessage,
                  response: responseNullMessage,
                })
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
        </div>
        <div className="cell medium-6 xlarge-12" style={{zIndex:'1'}}>
          <Response
            apiCall={apiCall}
            response={response}
          />
        </div>
      </div>
    )
  }
}

export default Map
