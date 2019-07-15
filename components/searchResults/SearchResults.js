import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  renderResults() {
    if (this.props.results != null) {
        this.props.results.map((result, key) => (
            <TouchableOpacity onPress={() => { Linking.openURL(result.formattedUrl); }} >
              <Text key={key}>{result.title}</Text>
            </TouchableOpacity>
           ));
    } 
  }

  render() {
    return (
        <View style={styles.searchResultsContainer}>     
            {this.renderResults()}
        </View>
    );
  }
}

function mapStateToProps({ SearchReducer }) {
    const { results } = SearchReducer;
  return { results };
}

export default connect(mapStateToProps, null)(SearchResults);
