import React,{ Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, ImageBackground, View, TouchableHighlight, Animated } from 'react-native';
import { Card, CardSection } from './common';

const anim = { anim: {
  first: 'slideInLeft',
  second: 'slideInDown', 
  third: 'slideInUp',
  fourth: 'slideInRight'
} 
};
class ImageCard extends Component {

  state = {
    appReady: false,
    rootKey: Math.random(),
    visible: true,
    scaleValue: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 600,
      delay: this.props.index * 350,
      animIndex: this.props.index % 4,
  }).start();
  }
  animationSelection(index) {
    switch (index % 4) {
      case 0:
        return anim.anim.first;
      case 1:
        return anim.anim.second;
      case 2:
        return anim.anim.third;
      case 3: 
        return anim.anim.fourth;
      default:
        return anim.anim.first;
    }
  }
//style={{ opacity: this.state.scaleValue }}
  render() {
    console.log(anim[this.state.animIndex]);
    return (
      <Animatable.View delay={300} animation={this.animationSelection(this.props.index)}>
        <TouchableHighlight onPress={this.props.onPress} key={this.props.key}>
          <Card style={{ width: '100%', height: 600 }}>
            <ImageBackground
              source={this.props.ImageSource}
              style={{ width: '100%', height: 200, flex: 1 }}
            >
              <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{this.props.children}</Text>
              </View>
            </ImageBackground>
          </Card>
        </TouchableHighlight>
       </Animatable.View>
   );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    fontSize: 40,
    color: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
};
//uri: 'https://raw.githubusercontent.com/dondoko-susumu/react-native-card-media-example/master/media/kids_play_640.jpeg'
export default ImageCard;
