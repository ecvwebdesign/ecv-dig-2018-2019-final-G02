import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
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
    const productFiltered = products.filter(
      (productItem) => productItem.id === id
    )
    const productData = { ...productFiltered[0] }
    setProduct({ ...productData })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {product ? (
          <View>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>←</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.marque}>{product.marque}</Text>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.ref}>Réf. {product.id} </Text>
            <Text style={styles.price}>{product.price} €</Text>
            <View style={styles.imageContainer}>
              <ImageBackground
                style={styles.imageBackground}
                source={{ uri: product.image }}
              >
                <View style={styles.iconContainer}>
                  <TouchableOpacity style={styles.iconButton}>
                    <Image
                      style={styles.iconOne}
                      source={require('../../../commons/assets/images/heart.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                    <Image
                      style={styles.iconTwo}
                      source={require('../../../commons/assets/images/bag.png')}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text>Localiser dans mon magasin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Couleur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Taille</Text>
            </TouchableOpacity>
            <View style={styles.flexEnd}>
              <TouchableOpacity>
                <Text style={styles.underline}>Guide des tailles</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.underline}>Informations sur le produit</Text>
            </TouchableOpacity>
            <View style={styles.bookProduct}>
              <TouchableOpacity style={styles.bookItem}>
                <Text style={styles.bookText}>Reserver en magasin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookItem}>
                <Text>Ajouter au panier</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Loader />
        )}
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
    marginVertical: 5,
  },
  marque: {
    textTransform: 'uppercase',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    marginVertical: 2,
  },
  ref: {
    fontSize: 16,
    marginVertical: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageBackground: {
    marginVertical: 10,
    width: imageSizes.width,
    height: imageSizes.height,
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: -10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    marginVertical: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOne: {
    width: 30,
    height: 27,
  },
  iconTwo: {
    width: 23,
    height: 30,
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    marginVertical: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  underline: {
    textDecorationLine: 'underline',
    paddingVertical: 5,
  },
  bookProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '46%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    marginVertical: 10,
  },
  bookText: {},
})

export default ProductDetail
