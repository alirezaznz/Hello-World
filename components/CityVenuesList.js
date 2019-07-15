import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { venuesFetch } from '../actions';
import VenueListItem from './VenueListItem';

class CityVenues extends Component {

  renderRow(venue) {
    return <VenueListItem venue={venue} />;
  }

  render() {
    return (
        <FlatList
          data={this.props.venues}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
    );
  }
}


const mapStateToProps = ({ CityVenuesReducer }) => {
  const { venues } = CityVenuesReducer;
  return { venues };
};

export default connect(mapStateToProps, { venuesFetch })(CityVenues);
