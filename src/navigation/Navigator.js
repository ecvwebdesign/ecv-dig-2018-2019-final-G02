import React from 'react'
import { Image } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Login from '../modules/authentification/scenes/Login'
import Signup from '../modules/authentification/scenes/Signup'
import Home from '../modules/catalogue/scenes/Home'
import ProductsCategorie from '../modules/catalogue/scenes/ProductsCategorie'
import PrivateSales from '../modules/sales/scenes/PrivateSales'
import ProductDetail from '../modules/catalogue/scenes/ProductDetail'
import Informations from '../modules/account/scenes/Informations'
import Bookmarks from '../modules/bookmarks/scenes/Bookmarks'
import MarketScanner from '../modules/catalogue/scenes/MarketScanner'
import ProductScanner from '../modules/catalogue/scenes/ProductScanner'
import ProductAdvice from '../modules/catalogue/scenes/ProductAdvice'
import Recap from '../modules/cart/scenes/Recap'
import InqueriesInfos from '../modules/cart/scenes/InqueriesInfos'
import Paiement from '../modules/cart/scenes/Paiement'
import CartValidation from '../modules/cart/scenes/CartValidation'
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

const CartStack = createStackNavigator(
  {
    Recap: { screen: Recap },
    InqueriesInfos: { screen: InqueriesInfos },
    Paiement: { screen: Paiement },
    CartValidation: { screen: CartValidation },
  },
  {
    initialRouteName: 'Recap',
    mode: 'modal',
    headerMode: 'none',
  }
)

CartStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (
    getActiveRouteState(navigation.state).routeName === 'Recap'
    || getActiveRouteState(navigation.state).routeName === 'InqueriesInfos'
    || getActiveRouteState(navigation.state).routeName === 'Paiement'
  ) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

const CatalogueStack = createStackNavigator(
  {
    Home: { screen: Home },
    ProductsCategorie: {
      screen: ProductsCategorie,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    ProductAdvice: {
      screen: ProductAdvice,
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  }
)

const BottomTabStack = createBottomTabNavigator(
  {
    Accueil: CatalogueStack,
    Favoris: { screen: Bookmarks },
    'Ventes privées': { screen: PrivateSales },
    Compte: AccountStack,
    Panier: CartStack,
  },
  {
    initialRouteName: 'Accueil',
    mode: 'modal',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconSource
        switch (routeName) {
          case 'Accueil':
            if (focused) {
              iconSource = require('../commons/assets/images/home_full.png')
            } else {
              iconSource = require('../commons/assets/images/home.png')
            }
            break
          case 'Favoris':
            if (focused) {
              iconSource = require('../commons/assets/images/like_full.png')
            } else {
              iconSource = require('../commons/assets/images/like.png')
            }
            break
          case 'Ventes privées':
            if (focused) {
              iconSource = require('../commons/assets/images/ventes_full.png')
            } else {
              iconSource = require('../commons/assets/images/ventes.png')
            }
            break
          case 'Compte':
            if (focused) {
              iconSource = require('../commons/assets/images/user_full.png')
            } else {
              iconSource = require('../commons/assets/images/user_vide.png')
            }
            break
          case 'Panier':
            if (focused) {
              iconSource = require('../commons/assets/images/cart.png')
            } else {
              iconSource = require('../commons/assets/images/cart.png')
            }
            break
          default:
            break
        }
        if (routeName === 'Ventes privées') {
          return (
            <Image
              source={iconSource}
              style={{ width: 50, marginBottom: 40 }}
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
      activeTintColor: '#164194',
      inactiveTintColor: '#242A48',
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#174195',
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
    MarketScanner: {
      screen: MarketScanner,
      navigationOptions: {
        header: null,
      },
    },
    ProductScanner: {
      screen: ProductScanner,
      navigationOptions: {
        header: null,
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

const getActiveRouteState = (route) => {
  if (
    !route.routes
    || route.routes.length === 0
    || route.index >= route.routes.length
  ) {
    return route
  }

  const childActiveRoute = route.routes[route.index]
  return getActiveRouteState(childActiveRoute)
}

export default createAppContainer(RootStack)
