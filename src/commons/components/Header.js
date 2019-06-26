import React from 'react'
import {
  Image, View, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/images/logo-intersport.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            style={{ width: 12, height: 16, marginHorizontal: 5 }}
            source={require('../assets/images/localisation.png')}
          />
          <View>
            <Text
              style={{
                color: '#164194',
                textDecorationLine: 'underline',
                fontSize: 14,
                fontWeight: 'bold',
              }}
            >
              Bordeaux - Pessac
            </Text>
            <Text style={{ color: '#164194', fontSize: 14 }}>
              09:30 - 19:30
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 15,
  },
})

export default Header
