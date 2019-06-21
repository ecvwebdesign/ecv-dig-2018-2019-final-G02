import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../../themes/default'

const ProductList = ({ navigation, products }) => {
  console.log(products)

  const allProducts = products.map((product) => (
    <View key={product.id}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: product.image }} />
      <Text>{product.name}</Text>
    </View>
  ))

  return (
    <View>
      {allProducts}
    </View>
  )
}


ProductList.propTypes = {
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

export default ProductList

