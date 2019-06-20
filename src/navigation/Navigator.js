import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from '../modules/authentification/scenes/Login'
import Signup from '../modules/authentification/scenes/Signup'


const AuthStack = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Login',
  }
)

const RootStack = createStackNavigator(
  {
    Authentification: AuthStack,
  },
  {
    initialRouteName: 'Authentification',
  }
)

export default createAppContainer(RootStack)
