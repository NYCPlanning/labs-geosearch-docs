import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';

import fetch from 'isomorphic-fetch';

function getSuggestionValue(suggestion) {
  return suggestion.properties.label;
}

function renderSuggestion(suggestion) {
  return (
    <div>
      <FontAwesome name='map-marker' fixedWidth={true} className='dcp-orange' />
      <span>{suggestion.properties.label}</span>
    </div>
  );
}

function shouldRenderSuggestions(value) {
  return value.trim().length > 0;
}

class Search extends React.Component {

  static displayName = 'Search';

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      apiCall: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.props, nextProps) ||
           !_.isEqual(this.state, nextState);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    let apiCall = `https://geosearch.planninglabs.nyc/v1/autocomplete?text=${value}`;

    fetch(apiCall)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          suggestions: data.features ? data.features : [],
        });

        this.props.onResponse(data);
      });

    this.props.onSuggestions(apiCall);
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      apiCall: '',
    });
  }

  onChange = (e, obj) => {
    this.setState({
      value: obj.newValue,
    });
  }

  onSuggestionSelected = (e, o) => {
    this.setState({
      value: o.suggestionValue,
    });

    // pass up to Jane to create/update Marker
    this.props.onGeocoderSelection(o.suggestion, o.suggestion.properties.name);
  }

  clearInput= () => {
    this.props.onClear();
    // set the input field to ''
    this.setState({
      value: '',
    });
  }

  render() {
    const inputProps = {
      placeholder: 'Search for an address',
      value: this.state.value,
      onChange: this.onChange,
    };

    return (
      <div
        className={'search-form'}
        style={{ left: this.props.leftOffset }}
      >
        <Autosuggest
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={shouldRenderSuggestions}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      <FontAwesome name='times' fixedWidth={true} className='clear-button' onClick={this.clearInput} />
      </div>
    );
  }
}

Search.propTypes = {
  onGeocoderSelection: PropTypes.func,
  onClear: PropTypes.func,
  selectionActive: PropTypes.bool,
  leftOffset: PropTypes.number,
};

export default Search;
