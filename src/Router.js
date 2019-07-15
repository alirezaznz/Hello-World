import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CityVenuesList from './components/CityVenuesList';
import Intro from './components/Intro';
import HomePage from './components/HomePage';
import StartPage from './components/StartPage';
import Search from './components/Search';
import BotNavigation from './components/BotNavigation';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key='root'>
        {/* <Scene key="start" component={StartPage} hideNavBar initial /> */}
        <Scene key='bottomNavigate' component={BotNavigation} hideNavBar initial />
        <Scene key="search" component={Search} hideNavBar />
        <Scene key="homePage" component={HomePage} hideNavBar />
        <Scene key="cityVenues" component={CityVenuesList} title="City Venues" />
      </Scene>
    </Router>
  );
};

// const styles = {
// headerForceInset: {
//     paddingTop: 65,
//     top: 'never',
//     bottom: 'never'
//   }
// };
// <Scene key="intro" component={Intro} />
//sceneStyle={{ paddingTop: 65 }}
export default RouterComponent;
