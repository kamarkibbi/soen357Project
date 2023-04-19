import './App.css';
import Login from './components/js/login';
import SignUpOne from './components/js/signUpOne';
import SignUpTwo from './components/js/signUpTwo';
import Productivity from './components/js/productivity';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  screens: {
    login: Login,
    signUpOne: SignUpOne,
    signUpTwo: SignUpTwo,
    productivity: Productivity,
  }

});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <div>
      <AppContainer/>
    </div>
  );
}

export default App;
