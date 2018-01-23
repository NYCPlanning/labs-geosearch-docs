import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import JSONPretty from 'react-json-pretty';

const AboutPage = () => (
  <div className="page">

    <div className="callout secondary">
      <FontAwesome name='exclamation-triangle' />&nbsp; This documentation is a work in progress and subject to change.
    </div>

    <h1>API Documentation</h1>

    <p>You can use the <code>/autocomplete</code> endpoint alongside <code>/search</code> to enable real-time feedback, helping users quickly find what they are looking for without specifying their full search terms. This is typically implemented with a drop-down list allowing users to choose from a list of search options.</p>

    <p>To build a query with autocomplete, you need a text parameter, representing what a user has typed into your application so far. </p>

    <p>There are two user experience pitfalls to watch out for when implementing a client-side typeahead solution:</p>

    <ul>
      <li><strong>Requests must be throttled.</strong> Since autocomplete requests generally correspond directly to user input, it’s important to account for fast typers and throttle requests when using the autocomplete endpoint. Some devices and networks (for example, mobile phones on a slow connection) may respond poorly when too many requests are sent too quickly, so be sure to do some testing on your own.</li>
      <li><strong>Responses are asynchronous.</strong> This means you cannot be sure responses will be returned in the same order they were requested. If you were to send two queries synchronously, first 'Bro' then 'Broadway', you may find the 'Broadway' response would arrive before the 'Bro' response. This will result in a quick flash of 'Broadway' results followed by the results for 'Bro', which can confuse the user.</li>
    </ul>


    <hr />


    <h3>Results</h3>

    <p>The top-level structure to every response looks like this:</p>

    <JSONPretty className="" json={
`{
"geocoding":{...},
"type":"FeatureCollection",
"features":[...],
"bbox":[...]
}`
      } />


    <h4>List of features returned</h4>

    <p>The <code>features</code> property of the result is where you will find the list of results that best matched your input parameters.</p>

    <p>Each item in this list will contain all the information needed to find it in human-readable format in the <code>properties</code> block, as well as computer friendly coordinates in the <code>geometry</code> property.</p>

    <p>All results are points, and can be found in the coordinates array. Following the GeoJSON specification, these coordinates are in <strong>longitude, latitude</strong> order.</p>


    <h4>Bounding box</h4>

    <p>The <code>bbox</code> property describes the geographic extent of the entire FeatureCollection.</p>


    <h4>Result count</h4>

    <p>By default, <code>/search</code> results return 10 places, unless otherwise specified. If you want a different number of results, set the <code>size</code> parameter to the desired number.</p>

    <p>This example shows returning only the first result:</p>
    <JSONPretty className="" json={'/v1/search?text=120 Broadway&size=1'} />

    <p>If you want 25 results, you can build the query where size is 25:</p>
    <JSONPretty className="" json={'/v1/search?text=120 Broadway&size=25'} />

  </div>
)

export default AboutPage
