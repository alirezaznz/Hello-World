import TabBar from '@mindinventory/react-native-tab-bar-interaction';
import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native'; 
import HomePage from './HomePage';
import Search from './Search';


export default class BotNavigation extends Component {


     render() {
        return (
          <TabBar>
            <TabBar.Item
                icon={require('./cityImages/building.png')}
                selectedIcon={require('./cityImages/building.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#f5f5f5' }}
                onPress
            >
             <Animatable.View animation='slideInLeft'>
                <Search />
              </Animatable.View>
              
              
            </TabBar.Item>
            <TabBar.Item
                icon={require('./cityImages/building.png')}
                selectedIcon={require('./cityImages/building.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#f5f5f5' }}
            >
                {/* <Animatable.View animation='slideInUp'> */}
                  <HomePage />
                 {/* </Animatable.View> */}
                
            </TabBar.Item>
            <TabBar.Item
                icon={require('./cityImages/building.png')}
                selectedIcon={require('./cityImages/building.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: 'rgba(52, 52, 52, 0.8)' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
          </TabBar>
           );
     
}
}
