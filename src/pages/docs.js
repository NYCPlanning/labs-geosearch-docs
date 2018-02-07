import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import JSONPretty from 'react-json-pretty';

import BetaWarning from '../components/beta-warning';

const AboutPage = () => (
  <div className="page">

    <BetaWarning />

    <h1>API Documentation</h1>

    <div className="grid-x grid-margin-x">
      <div className="cell medium-7">
        <h2 className="header-large">GeoSearch Endpoints</h2>
        <ul>
          <li><strong><a href="#search">Search</a></strong> &ndash; Forward geocoding to find a place by address or name <small>(more precise than autocomplete)</small></li>
          <li><strong><a href="#autocomplete">Autocomplete</a></strong> &ndash; Real-time result suggestions without having to type the whole location <small>(much faster than search)</small></li>
        </ul>
      </div>
      <div className="cell medium-5">
        <div className="callout text-small">
          <p>Since GeoSearch is based on Pelias, see that documentation for more details.</p>

          <ul>
            <li>Pelias API documentation: <a href="https://github.com/pelias/pelias-doc" target="_blank">github.com/pelias/pelias-doc</a></li>
            <li>General Pelias info: <a href="https://github.com/pelias/pelias/" target="_blank">github.com/pelias/pelias/</a></li>
          </ul>
        </div>
      </div>
    </div>

    <p>All GeoSearch requests share the same format:</p>

    <JSONPretty className="" json={
`https://geosearch.planninglabs.nyc/v1/search?text=120 broadway
\\______/\\________________________/\\__/\\____/\\________________/
   |               |               /     \\           |
 scheme         domain       version     path      query
`
      } />

    <h3 className="header-medium">Which endpoint should I use?</h3>
    <p>Use the <code>/autocomplete</code> endpoint when the UI detects a user is typing. When a user pastes a complete address, the more precise <code>/search</code> endpoint should be used.</p>


    <hr id="search" />

    <h2 className="header-xlarge"><a href="#search" className="header-link" className="header-link">Search <FontAwesome name='link' /></a></h2>
    <p>Search only requires one parameter, the text you want to match in an address or place name. Just build a query where the <code>text</code> parameter is set to the place you want to find.</p>
    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/search?text=120 Bro" target="_blank">https://geosearch.planninglabs.nyc/v1/search?text=120 Bro</a></blockquote>
    <p>The example above returns a GeoJSON file containing the best matching results for the text <code>120 Bro</code>. You’ll find the name of each matched locations in a property named <code>label</code>.</p>
    <p>Spelling matters, but not capitalization. You can type <code>broadway</code>, <code>Broadway</code>, or even <code>bRoAdWaY</code>.</p>

    <h3 className="header-medium">Results count</h3>
    <p>By default, the <code>/search</code> endpoint return 10 places. If you want a different number of results, set the <code>size</code> parameter to the desired number.</p>
    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/search?text=120 Bro&size=1" target="_blank">https://geosearch.planninglabs.nyc/v1/search?text=120 Bro&size=1</a></blockquote>
    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/search?text=120 Bro&size=25" target="_blank">https://geosearch.planninglabs.nyc/v1/search?text=120 Bro&size=25</a></blockquote>

    <h3 className="header-medium">Other parameters</h3>
    <p>Since GeoSearch data is specific to New York City, not <a href="https://github.com/pelias/pelias-doc/blob/master/search.md#available-search-parameters" target="_blank"><strong>all parameters available in Pelias</strong></a> work the same. However, there are some other parameters that might be used to refine your search:</p>
    <ul>
      <li><a href="https://github.com/pelias/pelias-doc/blob/master/search.md#search-within-a-rectangular-region" target="_blank"><strong>Search within a rectangular region</strong></a> - Specify a boundary using the minimum and maximum latitude/longitude</li>
      <li><a href="https://github.com/pelias/pelias-doc/blob/master/search.md#search-within-a-circular-region" target="_blank"><strong>Search within a circular region</strong></a> - Specify a boundary using a maximum distance from a point</li>
      <li><a href="https://github.com/pelias/pelias-doc/blob/master/search.md#specify-multiple-boundaries" target="_blank"><strong>Specify multiple boundaries</strong></a> - Results limited to the intersection of all specified boundaries</li>
      <li><a href="https://github.com/pelias/pelias-doc/blob/master/search.md#prioritize-results-by-proximity" target="_blank"><strong>Prioritize results by proximity</strong></a> - Prioritize results within geographic boundaries</li>
    </ul>


    <hr id="autocomplete" />

    <h2 className="header-xlarge"><a href="#autocomplete" className="header-link">Autocomplete <FontAwesome name='link' /></a></h2>

    <p>You can use the <code>/autocomplete</code> endpoint alongside <code>/search</code> to enable real-time feedback, helping users quickly find what they are looking for without specifying their full search terms. This is typically implemented with a drop-down list allowing users to choose from a list of search options.</p>

    <p>To build a query with autocomplete, you need a <code>text</code> parameter, representing what a user has typed into your application.</p>

    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/autocomplete?text=120 Bro" target="_blank">https://geosearch.planninglabs.nyc/v1/autocomplete?text=120 Bro</a></blockquote>

    <h3 className="header-medium">Local focus</h3>
    <p>The <code>/autocomplete</code> endpoint can promote nearby results to the top of the list, while still allowing matches from farther away to be visible.</p>

    <p>To focus your search based upon a geographical area, such as the center of the user's map or at the device's GPS location, supply the parameters <code>focus.point.lat</code> and <code>focus.point.lon</code>. This boosts locally relevant results higher.</p>

    This query for <code>100 Broadway</code> returns Manhattan first:
    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/autocomplete?text=100 East Broadway" target="_blank">https://geosearch.planninglabs.nyc/v1/autocomplete?text=100 East Broadway</a></blockquote>

    And this query for <code>100 Broadway</code> returns Staten Island first:
    <blockquote><a href="https://geosearch.planninglabs.nyc/v1/autocomplete?text=100 East Broadway&focus.point.lat=40.5693781&focus.point.lon=-74.1322297" target="_blank">https://geosearch.planninglabs.nyc/v1/autocomplete?text=100 East Broadway&focus.point.lat=40.5693781&focus.point.lon=-74.1322297</a></blockquote>

    <h3 className="header-medium">User Experience</h3>
    <p>There are pitfalls to watch out for when implementing a client-side typeahead solution:</p>
    <div className="grid-x grid-margin-x">
      <div className="cell medium-6">
        <p className="no-margin"><strong>Requests must be throttled</strong></p>
        <p className="text-small">Since autocomplete requests generally correspond directly to user input, it’s important to account for fast typers and throttle requests when using the autocomplete endpoint. Some devices and networks (for example, mobile phones on a slow connection) may respond poorly when too many requests are sent too quickly, so be sure to do some testing on your own.</p>
      </div>
      <div className="cell medium-6">
        <p className="no-margin"><strong>Responses are asynchronous</strong></p>
        <p className="text-small">This means you cannot be sure responses will be returned in the same order they were requested. If you were to send two queries synchronously, first 'Bro' then 'Broadway', you may find the 'Broadway' response would arrive before the 'Bro' response. This will result in a quick flash of 'Broadway' results followed by the results for 'Bro', which can confuse the user.</p>
      </div>
    </div>

    <h3 className="header-medium">Available autocomplete parameters</h3>
    <table className="text-small">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Required</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>text</code></td>
          <td>string</td>
          <td><FontAwesome name='check' className="success-color" fixedWidth /> Yes</td>
          <td><code>120 Broadway</code></td>
        </tr>
        <tr>
          <td><code>focus.point.lat</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>48.581755</code></td>
        </tr>
        <tr>
          <td><code>focus.point.lon</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>7.745843</code></td>
        </tr>
        <tr>
          <td><code>boundary.rect.min_lon</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>139.2794</code></td>
        </tr>
        <tr>
          <td><code>boundary.rect.max_lon</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>140.1471</code></td>
        </tr>
        <tr>
          <td><code>boundary.rect.min_lat</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>35.53308</code></td>
        </tr>
        <tr>
          <td><code>boundary.rect.max_lat</code></td>
          <td>floating point number</td>
          <td><FontAwesome name='times' className="warning-color" fixedWidth /> No</td>
          <td><code>35.81346</code></td>
        </tr>
      </tbody>
    </table>


    <hr id="results" />

    <h2 className="header-xlarge"><a href="#results" className="header-link">Results <FontAwesome name='link' /></a></h2>

    <p>Results from GeoSearch are <a href="https://tools.ietf.org/html/rfc7946" target="_blank">GeoJSON</a>. The top-level structure to every response looks like this:</p>
    <JSONPretty className="" json={
`{
"geocoding":{...},
"type":"FeatureCollection",
"features":[...],
"bbox":[...]
}`
      } />

    <h3 className="header-medium">Features</h3>
    <p>The <code>features</code> property is where you’ll find the list of places that best matched your input parameters. Each item in this list will contain human-readable information in its <code>properties</code> block, as well as computer-friendly <code>coordinates</code> in its <code>geometry</code> property (in <code>longitude, latitude</code> order).</p>

    <ul>
      <li><p><strong>Name</strong> &ndash; The <code>name</code> is a short description of the location&mdash;either the house number and street, or name of the non-addressable place.</p></li>
      <li><p><strong>Label</strong> &ndash; The <code>label</code> is a human-friendly representation of the place, with the most complete details, that is ready to be displayed to an end user.</p></li>
      <li><p><strong>Confidence</strong> &ndash; The <code>confidence</code> score in the <code>/search</code> endpoint is an estimation of how accurately the result matches the query. It primarily takes into account how well properties in the result match what was expected from parsing the input text.</p></li>
    </ul>

    <h3 className="header-medium">Bounding box</h3>
    <p>The <code>bbox</code> property describes the geographic extent of the entire FeatureCollection.</p>

  </div>
)

export default AboutPage
