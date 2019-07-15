import React from 'react';
import { Text, View, Modal, Image, SafeAreaView } from 'react-native';
import { Button, Card, CardSection } from './common';

const Instructions = ({ visible, onPress }) => {

  const { containerStyle, textStyle, cardSectionStyle, iconStyle, headerTextStyle } = styles;
  return (
    <SafeAreaView style={{ radius: 20, width: '80%' }}>
    <Modal
      visible={visible}
      trasparent
      animationType="fade"
      onrequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={headerTextStyle}>
            Test for best fucking experience:
          </Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Image source={require('./cityImages/wifiIcon.png')} style={iconStyle} />
          <Text style={textStyle}>
            some fucking bullshit
          </Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
        <Image source={require('./cityImages/phone.jpg')} style={iconStyle} />
          <Text style={textStyle}>
            some fucking bullshit
          </Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
        <Image source={require('./cityImages/building.png')} style={iconStyle} />
          <Text style={textStyle}>
            some fucking bullshit
          </Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Button onPress={onPress}>Okay</Button>
          
        </CardSection>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

const styles = {
  cardSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 40
  },
  headerTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    radius: 10,
    justifyContent: 'center'
  },
  iconStyle: {
    height: 100,
    width: 100
  }
};

export default Instructions;
