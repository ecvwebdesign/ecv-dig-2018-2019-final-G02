import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import CustomImage from '../../../commons/components/CustomImage'
import getImageSize from '../../../commons/utils/images'

const ProductList = ({ navigation, products }) => {
  const aspectRatio = 150 / 150
  const imageSizes = getImageSize(aspectRatio, 10)

  const allProducts = products.map((product) => (
    <View style={styles.productContainer} key={product.id}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <View>
          <CustomImage
            source={{ uri: product.image }}
            width={imageSizes.width / 2}
            height={imageSizes.height / 2}
          />
          <View style={styles.textContainer}>
            <Text>
              {product.supply
                ? ''
                : 'épuisé'
              }
            </Text>
            <Text>MARQUE</Text>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ))

  return (
    <ScrollView>
      <View style={styles.container}>
        {allProducts}
      </View>
    </ScrollView>
  )
}


ProductList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  productContainer: {
    width: '42%',
    marginHorizontal: '2%',
    marginVertical: 10,
  },
  textContainer: {
    paddingLeft: 5,
    marginVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  image: {
    width: '100%',
  },
})

export default ProductList
