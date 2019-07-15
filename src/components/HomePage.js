import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { citySelected, venuesFetch } from '../actions';
import ImageCard from './ImageCard';
import Images from './Images';
import Cities from '../data/Venues.json';

class HomePage extends Component {
  
constructor() {
  super();
  this._image = require('./cityImages/logo.png');
  //ImageCard = Animatable.createAnimatableComponent(ImageCard);
}

state = {
  appReady: false,
  visible: true,
};

onPress(city) {
  console.log(city);
  this.props.venuesFetch(city);
}
onPressModal() {
  this.setState({ visible: !this.state.visible });
}
renderItem(item) {
  return (
      <ImageCard 
          index={item.index} 
          ImageSource={Images.city[item.item.cityName]} 
          onPress={() => this.onPress(item.item)}
      >
          {item.item.cityPersianName}
      </ImageCard>
  );
  }
  render() {
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={Cities}
            style={{ flex: 0.9 }}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* <Instructions visible={this.state.visible} onPress={this.onPressModal.bind(this)}>
            are u sure?
          </Instructions> */}
        {/* <BotNavigation /> */}
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'darkgrey',
  },
});
export default connect(null, { citySelected, venuesFetch })(HomePage);
