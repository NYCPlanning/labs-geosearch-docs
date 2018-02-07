import React, { Component } from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

const Loading = props => (
  <div>

    { props.loading &&
      (
        <div className="text-center dark-gray" style={{ margin: '80px 0', padding: '20px 0', position: 'relative' }} >
          <FontAwesome
            name='spinner'
            spin
            pulse
            size="3x"
            className="medium-gray"
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              marginLeft: '-0.5em'
            }}
           />
          Loading&hellip;
        </div>
      )
    }
  </div>
);

class AboutPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  iframeLoaded = () => {
    this.setState({
      loading: false,
    });
  }

  render() {
    const form = (
      <div className="page">

        <p className="text-right text-small no-margin"><a href="https://github.com/NYCPlanning/labs-geosearch-dockerfiles/issues/new" target="_blank"><FontAwesome name='github' fixedWidth style={{transform:'scale(1.5)'}} />&nbsp;<strong>Create an issue</strong></a></p>

        <Loading loading={this.state.loading} />
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <iframe
          className="airtable-embed airtable-dynamic-height"
          title="feedback-form"
          src="https://airtable.com/embed/shrDlHV5nDpQnXRue?backgroundColor=yellow"
          frameBorder="0"
          width="100%"
          height="1020"
          onLoad={this.iframeLoaded}
        />
      </div>
    );

    return form;
  }
}

export default AboutPage
