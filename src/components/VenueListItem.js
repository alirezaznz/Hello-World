import React, { Component } from 'react';
import { Animated } from 'react-native';
import ImageCard from './ImageCard';
import Images from './Images';

class VenueListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
        scaleValue: new Animated.Value(0)
    };
}

componentDidMount() {
   console.log("imhere");
    
}

  render() {
    const { type, typePersian } = this.props.venue.item;
    return (
     
        <ImageCard ImageSource={Images.type[type].image}>
            {typePersian}
        </ImageCard>
     

    );
  }
}
export default VenueListItem;
