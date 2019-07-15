import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from './searchBar/SearchBar';
import SearchResults from './searchResults/SearchResults';
import BotNavigation from './BotNavigation';
 
export default class Search extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <SearchResults />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: '4%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
