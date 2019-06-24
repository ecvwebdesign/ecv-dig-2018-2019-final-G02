import React, { useState, useEffect } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, ImageBackground,
} from 'react-native'
import PropTypes from 'prop-types'
import products from '../../../commons/utils/fakeData.json'
import Loader from '../../../commons/components/Loader'
import getImageSize from '../../../commons/utils/images'

const ProductDetail = ({ navigation }) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProduct()
  })

  const getProduct = () => {
    const id = navigation.getParam('id')
    const productFiltered = products.filter((productItem) => productItem.id === id)
    const productData = { ...productFiltered[0] }
    setProduct({ ...productData })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {product
          ? (
            <View>
              <Text>Marque</Text>
              <Text>{product.name}</Text>
              <Text>REF</Text>
              <Text>{product.price}</Text>
              <View>
                <ImageBackground style={styles.imageBackground} source={{ uri: product.image }}>
                  <View style={styles.iconContainer}>
                    <View>
                      <TouchableOpacity>
                        <Image
                          style={styles.iconOne}
                          source={require('../../../commons/assets/images/heart.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Image
                          style={styles.iconTwo}
                          source={require('../../../commons/assets/images/bag.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <TouchableOpacity>
                <Text>Couleur</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Taille</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Guide des tailles</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Informations sur le produit</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <Text>Reserver en magasin</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>Ajouter au panier</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Loader />
          )
        }
      </View>
    </ScrollView>
  )
}


ProductDetail.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const aspectRatio = 1
const imageSizes = getImageSize(aspectRatio, 10)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  imageBackground: {
    width: imageSizes.width,
    height: imageSizes.height,
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: -10,
  },
  iconOne: {
    width: 30,
    height: 27,
  },
  iconTwo: {
    width: 23,
    height: 30,
  },
})

export default ProductDetail
