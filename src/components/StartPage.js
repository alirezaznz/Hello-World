import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView, Text, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

class StartPage extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <Animatable.Image
                    animation='fadeIn'
                    style={{ flex: 1, width: 500, height: 500, transform: [{ scale: this.springValue }] }}
                    source={require('../assets/logo.jpg')} />
                </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingTop: 150
    }
  })
export default StartPage;
