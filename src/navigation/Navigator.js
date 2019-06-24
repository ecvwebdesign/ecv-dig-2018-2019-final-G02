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
import PrivateSales from '../modules/catalogue/scenes/PrivateSales'
import ProductDetail from '../modules/catalogue/scenes/ProductDetail'
import Informations from '../modules/account/scenes/Informations'
import Bookmarks from '../modules/bookmarks/scenes/Bookmarks'
import MarketScanner from '../modules/catalogue/scenes/MarketScanner'
import ProductScanner from '../modules/catalogue/scenes/ProductScanner'
import Recap from '../modules/cart/scenes/Recap'
import InqueriesInfos from '../modules/cart/scenes/InqueriesInfos'
import Paiement from '../modules/cart/scenes/Paiement'
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
  },
  {
    initialRouteName: 'Recap',
    mode: 'modal',
    headerMode: 'none',
  }
)

const CatalogueStack = createStackNavigator(
  {
    Home: { screen: Home },
    ProductsCategorie: {
      screen: ProductsCategorie,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    ProductScanner: {
      screen: ProductScanner,
    },
  },
  {
    initialRouteName: 'ProductsCategorie',
    mode: 'modal',
    headerMode: 'none',
  }
)

const BottomTabStack = createBottomTabNavigator(
  {
    Catalogue: CatalogueStack,
    Bookmarks: { screen: Bookmarks },
    Sales: { screen: PrivateSales },
    Account: AccountStack,
    Cart: CartStack,
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
              iconSource = require('../commons/assets/images/home-full.png')
            } else {
              iconSource = require('../commons/assets/images/home.png')
            }
            break
          case 'Bookmarks':
            if (focused) {
              iconSource = require('../commons/assets/images/heart-full.png')
            } else {
              iconSource = require('../commons/assets/images/heart.png')
            }
            break
          case 'Scanner':
            if (focused) {
              iconSource = require('../commons/assets/images/promo-full.png')
            } else {
              iconSource = require('../commons/assets/images/promo.png')
            }
            break
          case 'Account':
            if (focused) {
              iconSource = require('../commons/assets/images/user-full.png')
            } else {
              iconSource = require('../commons/assets/images/user.png')
            }
            break
          case 'Cart':
            if (focused) {
              iconSource = require('../commons/assets/images/bag-full.png')
            } else {
              iconSource = require('../commons/assets/images/bag.png')
            }
            break
          default:
            break
        }
        // If (routeName === 'Scanner') {
        //   return (
        //     <View style={{ width: 20, height: 20, backgroundColor: 'grey' }}>
        //       <Image
        //         source={iconSource}
        //         style={{ width: 50, marginBottom: 50 }}
        //         resizeMode="contain"
        //       />
        //     </View>
        //   )
        // }
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
    MarketScanner: {
      screen: MarketScanner,
    },
  },
  {
    initialRouteName: 'BottomTab',
    headerMode: 'none',
  }
)

export default createAppContainer(RootStack)
