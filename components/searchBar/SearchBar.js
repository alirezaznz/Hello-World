import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, TouchableOpacity, View, Image } from 'react-native';
//import { FontAwesome } from '@expo/vector-icons';
import { searchResults } from '../../actions';
import API_KEY from '../../api.js';


const styles = require('./SearchBarStyles');

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
    }

    searchOnMedium = () => {
        const apiURL = 'https://www.googleapis.com/customsearch/v1?';
        const cx = '015155994406282088989:kdiq-eyywua';
        let URL = apiURL + '?key=' + API_KEY + '&cx=' + cx + '&q=' + this.state.searchTerm;
      console.log(URL);
        fetch(URL, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }).then((response) => { response.json().then((data) => {
            console.log(data);
            this.props.searchResults(data.items);
          });
        }).catch((error) => console.log(error));
      }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
          placeholder='Enter your search terms'
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity
          style={styles.textSearchButton
          }
          onPress={this.searchOnMedium.bind(this)}
        >
            <Image source={require('../../assets/search.png')} style={{ height: 40, width: 40 }} />
          {/* <FontAwesome name="search" size={16} color="#000" /> */}
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(null, { searchResults })(SearchBar);
