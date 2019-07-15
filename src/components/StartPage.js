import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView, Text, StyleSheet, Animated } from 'react-native';

class StartPage extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text
                    style={{ marginBottom: 100 }}
                    onPress={this.spring.bind(this)}>Spring</Text>
                    <Animated.Image
                    style={{ flex: 1, width: 500, height: 500, transform: [{ scale: this.springValue }] }}
                    source={require('./cityImages/logo.png')}/>
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
