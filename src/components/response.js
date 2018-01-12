import React from 'react';
import JSONPretty from 'react-json-pretty';

class Response extends React.Component {

  render() {

    return(

      <div className="response">
        <div className="response-query">{this.props.apiCall}</div>
        <JSONPretty className="response-json" json={this.props.response}></JSONPretty>
      </div>

    )

  }

}

export default Response
