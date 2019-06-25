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
import OtherArticles from '../components/OtherArticles'

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
                </View>
              </ImageBackground>
            </View>
            <TouchableOpacity style={styles.homeDelivery}>
              <Image
                style={styles.iconTwo}
                source={require('../../../commons/assets/images/bag.png')}
              />
              <Text>Me faire livrer chez moi</Text>
            </TouchableOpacity>
            <View>
              <View style={styles.advicesHeader}>
                <Text>Avis Clients</Text>
                <Text>Stars</Text>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.adviceContainer}>
                <View style={styles.adviceHeader}>
                  <View>
                    <Text>Name Surname</Text>
                    <Text>Date</Text>
                  </View>
                  <Text>Stars</Text>
                </View>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco poriti laboris nisi ut aliquip ex ea commodo
                  consequat.
                </Text>
              </View>
              <View style={styles.adviceContainer}>
                <View style={styles.adviceHeader}>
                  <View>
                    <Text>Name Surname</Text>
                    <Text>Date</Text>
                  </View>
                  <Text>Stars</Text>
                </View>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco poriti laboris nisi ut aliquip ex ea commodo
                  consequat.
                </Text>
              </View>
              <View style={styles.adviceContainer}>
                <View style={styles.adviceHeader}>
                  <View>
                    <Text>Name Surname</Text>
                    <Text>Date</Text>
                  </View>
                  <Text>Stars</Text>
                </View>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco poriti laboris nisi ut aliquip ex ea commodo
                  consequat.
                </Text>
              </View>
              <TouchableOpacity style={styles.seeMore}>
                <Text style={styles.seeMoreText}>Voir plus </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infosHeader}>
                <Text style={styles.infosHeaderText}>Guide des tailles</Text>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sizeList}>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text>M</Text>
                </TouchableOpacity>
              </View>
              <Text>Correspondance tour de poitrine: 85cm</Text>
              <TouchableOpacity style={styles.sizeGuide}>
                <Text style={styles.underline}>Quelle taille choisir</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infosHeader}>
                <Text style={styles.infosHeaderText}>Informations produit</Text>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text>
                  • La technologie Dri-FIT vous aide à rester au sec et au
                  frais.
                </Text>
                <Text>
                  • Le tissu Nike Breathe est léger pour plus de fraîcheur.
                </Text>
                <Text>
                  • La coupe ajustée épouse les formes de votre corps sans
                  limiter les mouvements.
                </Text>
              </View>
              <View>
                <Text>Couleur</Text>
              </View>
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infosHeader}>
                <Text style={styles.infosHeaderText}>Livraison et retour</Text>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text>Retrait en magasin</Text>
                <Text>Gratuit</Text>
                <Text>Disponible en 48h</Text>
              </View>
            </View>
            <View style={styles.otherArticles}>
              <Text style={styles.infosHeaderText}>
                Articles Complémentaire
              </Text>
              <OtherArticles navigation={navigation} />
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
    marginVertical: 20,
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
  homeDelivery: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
  },
  iconOne: {
    width: 30,
    height: 27,
  },
  iconTwo: {
    width: 18,
    height: 23,
    marginHorizontal: 5,
  },
  advicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  adviceContainer: {
    backgroundColor: 'grey',
    padding: 15,
    marginVertical: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  adviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  seeMore: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreText: {
    textDecorationLine: 'underline',
  },
  infosContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 20,
  },
  infosHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  infosHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizeList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  sizeButton: {
    width: 60,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sizeGuide: {
    marginVertical: 10,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  underline: {
    textDecorationLine: 'underline',
    paddingVertical: 5,
  },
  otherArticles: {
    marginVertical: 20,
  },
})

export default ProductDetail
