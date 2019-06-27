import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import CustomImage from '../../../commons/components/CustomImage'
import getImageSize from '../../../commons/utils/images'

const ProductList = ({ navigation, products }) => {
  const aspectRatio = 150 / 150
  const imageSizes = getImageSize(aspectRatio, 10)

  const handleProductPress = (idProduct) => {
    navigation.navigate('ProductDetail', {
      id: idProduct,
    })
  }

  const supplyHandler = (supply) => {
    if (!supply) {
      return <Text style={{ color: '#E40101', fontSize: 14 }}>Epuisé</Text>
    }
    if (supply <= 5) {
      return (
        <Text style={{ color: '#E40101', fontSize: 14 }}>Presque plus</Text>
      )
    }
    return null
  }

  const allProducts = products.map((product) => (
    <View style={styles.productContainer} key={product.id}>
      <TouchableOpacity onPress={() => handleProductPress(product.id)}>
        <View>
          <CustomImage
            source={{ uri: product.image }}
            width={imageSizes.width / 2 - 20}
            height={imageSizes.height / 2 - 20}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#174195',
              paddingVertical: 8,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text style={{ color: '#FFFFFF' }}>Ajouter au panier</Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            {supplyHandler(product.supply)}
            <Text
              style={{
                color: '#242A48',
                textDecorationLine: 'underline',
                textTransform: 'uppercase',
                fontSize: 14,
                marginBottom: 8,
              }}
            >
              {product.marque}
            </Text>
            <Text
              style={{ color: '#242A48', fontSize: 16, fontWeight: 'bold' }}
            >
              {product.name}
            </Text>
            <Text
              style={{ color: '#0364D9', fontSize: 16, marginVertical: 10 }}
            >
              {product.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ))

  return (
    <ScrollView>
      <View style={styles.container}>{allProducts}</View>
    </ScrollView>
  )
}

ProductList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    // MarginHorizontal: 10,
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
