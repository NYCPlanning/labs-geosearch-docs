import React from 'react';

class Response extends React.Component {

  render() {

    return(

      <div className="response">
        <div className="response-query">
          {
            `https://geosearch.planning.nyc.gov/v1/autocomplete?text=120%20Bro`
          }
        </div>
        <pre className="response-json">
          <code>
            {
`{
  "geocoding": {
    "version": "0.2",
    "attribution": "http://pelias.mapzen.com/v1/attribution",
    "query": {
      "text": "120 Bro",
      "size": 10,
      "private": false,
      "focus.point.lat": 41.680996618185404,
      "focus.point.lon": -74.24696426313044,
      "lang": {
        "name": "English",
        "iso6391": "en",
        "iso6393": "eng",
        "defaulted": false
      },
      "querySize": 20,
      "parser": "libpostal",
      "parsed_text": {
        "number": "120",
        "street": "bro"
      }
    },
    "engine": {
      "name": "Pelias",
      "author": "Mapzen",
      "version": "1.0"
    },
    "timestamp": 1515688407867
  },
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.20867,
          61.827445
        ]
      },
      "properties": {
        "id": "polyline:136824",
        "gid": "openstreetmap:street:polyline:136824",
        "layer": "street",
        "source": "openstreetmap",
        "source_id": "polyline:136824",
        "name": "Bro",
        "street": "Bro",
        "confidence": 0.8,
        "match_type": "fallback",
        "distance": 6104.071,
        "accuracy": "centroid",
        "country": "Sweden",
        "country_gid": "whosonfirst:country:85633789",
        "country_a": "SWE",
        "region": "Gävleborg County",
        "region_gid": "whosonfirst:region:85688453",
        "continent": "Europe",
        "continent_gid": "whosonfirst:continent:102191581",
        "label": "Bro, Sweden"
      },
      "bbox": [
        17.208526,
        61.82246,
        17.211444,
        61.831085
      ]
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.633994,
          56.318857
        ]
      },
      "properties": {
        "id": "polyline:697843",
        "gid": "openstreetmap:street:polyline:697843",
        "layer": "street",
        "source": "openstreetmap",
        "source_id": "polyline:697843",
        "name": "bro",
        "street": "bro",
        "confidence": 0.8,
        "match_type": "fallback",
        "distance": 5886.686,
        "accuracy": "centroid",
        "country": "Denmark",
        "country_gid": "whosonfirst:country:85633121",
        "country_a": "DNK",
        "region": "Midtjylland",
        "region_gid": "whosonfirst:region:85682597",
        "continent": "Europe",
        "continent_gid": "whosonfirst:continent:102191581",
        "label": "bro, Denmark"
      },
      "bbox": [
        8.633953,
        56.318836,
        8.634034,
        56.318878
      ]
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          91.573622,
          24.076894
        ]
      },
      "properties": {
        "id": "polyline:22324137",
        "gid": "openstreetmap:street:polyline:22324137",
        "layer": "street",
        "source": "openstreetmap",
        "source_id": "polyline:22324137",
        "name": "BRO",
        "street": "BRO",
        "confidence": 0.8,
        "match_type": "fallback",
        "distance": 12579.55,
        "accuracy": "centroid",
        "country": "Bangladesh",
        "country_gid": "whosonfirst:country:85632475",
        "country_a": "BGD",
        "region": "Sylhet",
        "region_gid": "whosonfirst:region:85669025",
        "county": "Habiganj District",
        "county_gid": "whosonfirst:county:421176045",
        "continent": "Asia",
        "continent_gid": "whosonfirst:continent:102191569",
        "label": "BRO, Bangladesh"
      },
      "bbox": [
        91.551597,
        24.071458,
        91.593917,
        24.078306
      ]
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.90059,
          54.954041
        ]
      },
      "properties": {
        "id": "polyline:1096855",
        "gid": "openstreetmap:street:polyline:1096855",
        "layer": "street",
        "source": "openstreetmap",
        "source_id": "polyline:1096855",
        "name": "Bro",
        "street": "Bro",
        "confidence": 0.8,
        "match_type": "fallback",
        "distance": 6018.38,
        "accuracy": "centroid",
        "country": "Denmark",
        "country_gid": "whosonfirst:country:85633121",
        "country_a": "DNK",
        "region": "Syddanmark",
        "region_gid": "whosonfirst:region:85682575",
        "continent": "Europe",
        "continent_gid": "whosonfirst:continent:102191581",
        "label": "Bro, Denmark"
      },
      "bbox": [
        9.900473,
        54.953762,
        9.900593,
        54.954322
      ]
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.249567,
          55.551044
        ]
      },
      "properties": {
        "id": "polyline:922598",
        "gid": "openstreetmap:street:polyline:922598",
        "layer": "street",
        "source": "openstreetmap",
        "source_id": "polyline:922598",
        "name": "bro",
        "street": "bro",
        "confidence": 0.8,
        "match_type": "fallback",
        "distance": 6128.053,
        "accuracy": "centroid",
        "country": "Denmark",
        "country_gid": "whosonfirst:country:85633121",
        "country_a": "DNK",
        "region": "Region Zealand",
        "region_gid": "whosonfirst:region:85682589",
        "continent": "Europe",
        "continent_gid": "whosonfirst:continent:102191581",
        "label": "bro, Denmark"
      },
      "bbox": [
        12.249526,
        55.550998,
        12.249608,
        55.55109
      ]
    }
  ],
  "bbox": [
    8.633953,
    24.071458,
    91.593917,
    61.831085
  ]
}`
            }
          </code>
        </pre>
      </div>

    )

  }

}

export default Response
