import React from 'react'
import {
  Image,
} from 'react-native'
import {
  createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator,
} from 'react-navigation'
import Login from '../modules/authentification/scenes/Login'
import Signup from '../modules/authentification/scenes/Signup'
import Home from '../modules/catalogue/scenes/Home'
import ProductsCategorie from '../modules/catalogue/scenes/ProductsCategorie'
import PrivateSales from '../modules/catalogue/scenes/PrivateSales'
import Informations from '../modules/account/scenes/Informations'
import Bookmarks from '../modules/bookmarks/scenes/Bookmarks'
import Scanner from '../modules/scanner/scenes/Scanner'
import Cart from '../modules/cart/scenes/Cart'
import Header from '../commons/components/Header'

const AccountStack = createStackNavigator(
  {
    Informations: { screen: Informations },
  },
  {
    initialRouteName: 'Informations',
    mode: 'modal',
    headerMode: 'none',
  }
)

const CatalogueStack = createStackNavigator(
  {
    Home: { screen: Home },
    ProductsList: {
      screen: ProductsCategorie,
    },
    PrivateSales: {
      screen: PrivateSales,
    },
  },
  {
    initialRouteName: 'PrivateSales',
    mode: 'modal',
    headerMode: 'none',
  }
)

const BottomTabStack = createBottomTabNavigator(
  {
    Catalogue: CatalogueStack,
    Bookmarks: { screen: Bookmarks },
    Scanner: { screen: Scanner },
    Account: AccountStack,
    Cart: { screen: Cart },

  },
  {
    initialRouteName: 'Catalogue',
    mode: 'modal',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconSource
        switch (routeName) {
          case 'Catalogue':
            if (focused) {
              iconSource = require('../commons/assets/images/journal_actif.png')
            } else {
              iconSource = require('../commons/assets/images/journal_inactif.png')
            }
            break
          case 'Bookmarks':
            if (focused) {
              iconSource = require('../commons/assets/images/enregistres_actif.png')
            } else {
              iconSource = require('../commons/assets/images/enregistres_inactif.png')
            }
            break
          case 'Scanner':
            if (focused) {
              iconSource = require('../commons/assets/images/Rectangle.png')
            } else {
              iconSource = require('../commons/assets/images/Rectangle.png')
            }
            break
          case 'Account':
            if (focused) {
              iconSource = require('../commons/assets/images/profile_actif.png')
            } else {
              iconSource = require('../commons/assets/images/profile_inactif.png')
            }
            break
          default:
            break
        }
        if (routeName === 'Scanner') {
          return (
            <Image
              source={iconSource}
              style={{ width: 50, marginBottom: 50 }}
              resizeMode="contain"
            />
          )
        }
        return (
          <Image
            source={iconSource}
            style={{ width: 20 }}
            resizeMode="contain"
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: '#BC2342',
      inactiveTintColor: '#262626',
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20,
      },
    },
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
      navigationOptions: {
        header: null,
      },
    },
    BottomTab: {
      screen: BottomTabStack,
      navigationOptions: {
        header: (props) => <Header {...props} />,
      },
    },
  },
  {
    initialRouteName: 'BottomTab',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#fff',
    },
  }
)

export default createAppContainer(RootStack)
