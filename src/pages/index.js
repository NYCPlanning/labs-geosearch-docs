



import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import JSONPretty from 'react-json-pretty';

class IndexPage extends React.Component {
  render() {
    return (
      <div className="page">

        <p className="lead">NYC GeoSearch is a service that transforms input text—such as an address, or the name of a place—to authoritative New York City addresses using data from the <a href="https://www1.nyc.gov/site/planning/data-maps/open-data.page#pad">Property Address Directory</a>. </p>

        <div className="grid-x grid-margin-x grid-padding-y">
          <div className="cell medium-6">
            <p className="no-margin">GeoSearch provides autocomplete search results in NYC Planning's web apps:</p>
            <ul>
              <li><a href="https://zola.planning.nyc.gov" target="_blank"><strong>Zoning&nbsp;&amp; Land&nbsp;Use Map</strong></a></li>
              <li><a href="https://communityprofiles.planning.nyc.gov/" target="_blank"><strong>Community District Profiles</strong></a></li>
            </ul>
          </div>
          <div className="cell medium-6">
            <p>Real-time feedback makes our apps more user-friendly and intuitive. Just start typing and an autocomplete list will appear, allowing you to choose from valid search results.</p>
          </div>
        </div>

        <p className="large-text-center"><Link to="docs/" className="button large secondary"><FontAwesome name='cogs' />&nbsp; Read the API documentation</Link></p>

        <hr />

        <h3 className="header-large">How does it work?</h3>

        <p className="text-small">NYC GeoSearch is built on <a href="http://pelias.io/" target="_blank">Pelias</a>, the open source geocoding engine that powered Mapzen Search. It uses authoritative <a href="https://www1.nyc.gov/site/planning/data-maps/open-data.page#pad" target="_blank">Property Address Directory (PAD)</a> data from the NYC Planning's Geographic Systems Section. Since this data contains ranges of addresses, it's normalized and expanded into discrete address rows that Pelias understands.</p>

        <p><img src="https://user-images.githubusercontent.com/1833820/35118079-b384f024-fc5e-11e7-9f31-83a281e42381.png" /></p>

        <h4 className="header-medium">Learn more on GitHub:</h4>

        <ul className="no-bullet">
          <li>
            <a href="https://github.com/NYCPlanning/labs-geosearch-dockerfiles" target="_blank"><FontAwesome name='github' style={{ opacity: '0.8' }} />&nbsp; <strong>labs-geosearch-dockerfiles</strong></a>
            &nbsp;&nbsp;<span className="medium-gray">|</span>&nbsp;&nbsp;
            <a href="https://github.com/NYCPlanning/labs-geosearch-dockerfiles/issues/new" target="_blank"><small>Report a bug</small></a>
            <p className="text-small">Containerized local installation package for NYC GeoSearch</p>
          </li>
          <li>
            <a href="https://github.com/NYCPlanning/labs-geosearch-pad-normalize" target="_blank"><FontAwesome name='github' style={{ opacity: '0.8' }} />&nbsp; <strong>labs-geosearch-pad-normalize</strong></a>
            &nbsp;&nbsp;<span className="medium-gray">|</span>&nbsp;&nbsp;
            <a href="https://github.com/NYCPlanning/labs-geosearch-pad-normalize" target="_blank"><small>Report a bug</small></a>
            <p className="text-small">R script to normalize PAD into discrete address records</p>
          </li>
          <li>
            <a href="https://github.com/NYCPlanning/labs-geosearch-pad-importer" target="_blank"><FontAwesome name='github' style={{ opacity: '0.8' }} />&nbsp; <strong>labs-geosearch-pad-importer</strong></a>
            &nbsp;&nbsp;<span className="medium-gray">|</span>&nbsp;&nbsp;
            <a href="https://github.com/NYCPlanning/labs-geosearch-pad-importer/issues/new" target="_blank"><small>Report a bug</small></a>
            <p className="text-small">A Pelias importer for authoritative NYC addresses</p>
          </li>
          <li>
            <a href="https://github.com/NYCPlanning/labs-geosearch-docs" target="_blank"><FontAwesome name='github' style={{ opacity: '0.8' }} />&nbsp; <strong>labs-geosearch-docs</strong></a>
            &nbsp;&nbsp;<span className="medium-gray">|</span>&nbsp;&nbsp;
            <a href="https://github.com/NYCPlanning/labs-geosearch-docs/issues/new" target="_blank"><small>Report a bug</small></a>
            <p className="text-small">GeoSearch API Documentation (this website)</p>
          </li>
          <li>
            <a href="https://github.com/NYCPlanning/labs-geosearch-acceptance-tests" target="_blank"><FontAwesome name='github' style={{ opacity: '0.8' }} />&nbsp; <strong>labs-geosearch-acceptance-tests</strong></a>
            &nbsp;&nbsp;<span className="medium-gray">|</span>&nbsp;&nbsp;
            <a href="https://github.com/NYCPlanning/labs-geosearch-acceptance-tests/issues/new" target="_blank"><small>Report a bug</small></a>
            <p className="text-small">Acceptance tests for the GeoSearch API</p>
          </li>
        </ul>

      </div>
    )
  }
}

export default IndexPage
