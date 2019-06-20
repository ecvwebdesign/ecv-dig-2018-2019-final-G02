import {
  createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator,
} from 'react-navigation'
import Login from '../modules/authentification/scenes/Login'
import Signup from '../modules/authentification/scenes/Signup'
import Home from '../modules/catalogue/scenes/Home'
import Informations from '../modules/account/scenes/Informations'

const CatalogueStack = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  }
)

const BottomTabStack = createBottomTabNavigator(
  {
    Catalogue: CatalogueStack,
    Account: { screen: Informations },
  },
  {
    initialRouteName: 'Catalogue',
    mode: 'modal',
    headerMode: 'none',
  }
)

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
    headerMode: 'none',
  }
)

const RootStack = createStackNavigator(
  {
    Authentification: {
      screen: AuthStack,
    },
    BottomTab: {
      screen: BottomTabStack,
    },
  },
  {
    initialRouteName: 'Authentification',
    mode: 'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(RootStack)
