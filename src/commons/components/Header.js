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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Bordeaux</Text>
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
  },
})

export default Header
