import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../../themes/default'

const ProductCategorie = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste Produits</Text>
    </View>
  )
}


ProductCategorie.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.common.defaultSidePadding,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
})

export default ProductCategorie

