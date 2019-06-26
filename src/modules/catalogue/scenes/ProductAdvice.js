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
                      source={require('../../../commons/assets/images/like.png')}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <TouchableOpacity style={styles.homeDelivery}>
              <Image
                style={styles.iconTwo}
                source={require('../../../commons/assets/images/cart.png')}
              />
              <Text style={styles.homeDeliveryText}>
                Me faire livrer chez moi
              </Text>
            </TouchableOpacity>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <View style={styles.advicesTitle}>
                  <Text style={styles.blockTitle}>Avis Clients</Text>
                  <Text style={styles.advicesAverage}>4,6/5</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.minify}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.adviceContainer}>
                <Text style={styles.adviceDate}>17/05/2019</Text>
                <View style={styles.adviceHeader}>
                  <Text style={styles.adviceName}>Name Surname</Text>
                  <View style={styles.scoreCont}>
                    <Image
                      style={{ width: 15, height: 15 }}
                      source={require('../../../commons/assets/images/like.png')}
                    />
                    <Text style={styles.score}>Satisfait</Text>
                  </View>
                </View>
                <Text style={styles.adviceText}>
                  Joli maillot. Produit bien fini, agréable à porter et qui fait
                  son effet.
                </Text>
                <Text style={styles.benefitsTitle}>+ Points forts</Text>
                <Text style={styles.benefits}>Agréables à porter</Text>
                <Text style={styles.consTitle}>- Points faibles</Text>
                <Text style={styles.cons}>Prix toujours trop cher</Text>
              </View>
              <View style={styles.adviceContainer}>
                <Text style={styles.adviceDate}>17/05/2019</Text>
                <View style={styles.adviceHeader}>
                  <Text style={styles.adviceName}>Name Surname</Text>
                  <View style={styles.scoreCont}>
                    <Image
                      style={{ width: 15, height: 15 }}
                      source={require('../../../commons/assets/images/like.png')}
                    />
                    <Text style={styles.score}>Satisfait</Text>
                  </View>
                </View>
                <Text style={styles.adviceText}>
                  Joli maillot. Produit bien fini, agréable à porter et qui fait
                  son effet.
                </Text>
                <Text style={styles.benefitsTitle}>+ Points forts</Text>
                <Text style={styles.benefits}>Agréables à porter</Text>
                <Text style={styles.consTitle}>- Points faibles</Text>
                <Text style={styles.cons}>Prix toujours trop cher</Text>
              </View>
              <View style={styles.adviceContainer}>
                <Text style={styles.adviceDate}>17/05/2019</Text>
                <View style={styles.adviceHeader}>
                  <Text style={styles.adviceName}>Name Surname</Text>
                  <View style={styles.scoreCont}>
                    <Image
                      style={{ width: 15, height: 15 }}
                      source={require('../../../commons/assets/images/like.png')}
                    />
                    <Text style={styles.score}>Satisfait</Text>
                  </View>
                </View>
                <Text style={styles.adviceText}>
                  Joli maillot. Produit bien fini, agréable à porter et qui fait
                  son effet.
                </Text>
                <Text style={styles.benefitsTitle}>+ Points forts</Text>
                <Text style={styles.benefits}>Agréables à porter</Text>
                <Text style={styles.consTitle}>- Points faibles</Text>
                <Text style={styles.cons}>Prix toujours trop cher</Text>
              </View>
              <TouchableOpacity style={styles.seeMore}>
                <Text style={styles.seeMoreText}>Voir plus </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>Guide des tailles</Text>
                <TouchableOpacity>
                  <Text style={styles.minify}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sizeList}>
                <TouchableOpacity style={styles.sizeButtonActiv}>
                  <Text style={styles.sizeButtonTextWhite}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text style={styles.sizeButtonTextBlue}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text style={styles.sizeButtonTextBlue}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text style={styles.sizeButtonTextBlue}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton}>
                  <Text style={styles.sizeButtonTextBlue}>XL</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.sizeIndication}>
                Correspondance tour de poitrine: 85cm
              </Text>
              <TouchableOpacity style={styles.sizeGuide}>
                <Image
                  style={{ width: 22, height: 12 }}
                  source={require('../../../commons/assets/images/home.png')}
                />
                <Text style={styles.sizeGuideText}>Quelle taille choisir</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>Informations produit</Text>
                <TouchableOpacity>
                  <Text style={styles.minify}>-</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.infosText}>
                  • La technologie Dri-FIT vous aide à rester au sec et au
                  frais.
                </Text>
                <Text style={styles.infosText}>
                  • Le tissu Nike Breathe est léger pour plus de fraîcheur.
                </Text>
                <Text style={styles.infosText}>
                  • La coupe ajustée épouse les formes de votre corps sans
                  limiter les mouvements.
                </Text>
              </View>
              <Text style={styles.colorsTitle}>Gamme de couleur</Text>
              <View style={styles.colors}>
                <TouchableOpacity style={styles.color}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri:
                        'https://media.intersport.fr/is/image/intersportfr/AJ4394_GRH_Q1?$produit_l$',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.color}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri:
                        'https://media.intersport.fr/is/image/intersportfr/AJ4394_GRH_Q1?$produit_l$',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>Livraison et retour</Text>
                <TouchableOpacity>
                  <Text style={styles.minify}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryLabel}>Retrait en magasin</Text>
                <Text style={styles.deliveryPrice}>GRATUIT</Text>
                <Text style={styles.deliveryDelay}>Disponible en 4h</Text>
              </View>
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryLabel}>Retrait en magasin</Text>
                <Text style={styles.deliveryPrice}>GRATUIT</Text>
                <Text style={styles.deliveryDelay}>Disponible en 4h</Text>
              </View>
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryLabel}>Retrait en magasin</Text>
                <Text style={styles.deliveryPrice}>GRATUIT</Text>
                <Text style={styles.deliveryDelay}>Disponible en 4h</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryLabel}>Retrait en magasin</Text>
                <Text style={styles.deliveryDelay}>Disponible en 4h</Text>
              </View>
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryLabel}>Retrait en magasin</Text>
                <Text style={styles.deliveryDelay}>Disponible en 4h</Text>
              </View>
            </View>
            <View style={styles.otherArticles}>
              <Text style={styles.blockTitle}>Articles Complémentaires</Text>
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

const blockContainer = {
  backgroundColor: '#FFFFFF',
  padding: 15,
  marginVertical: 10,
}
const flexCenter = {
  flexDirection: 'row',
  alignItems: 'center',
}

const aspectRatio = 1
const imageSizes = getImageSize(aspectRatio, 10)

const styles = StyleSheet.create({
  blockContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#F7F7F7',
  },
  marque: {
    textTransform: 'uppercase',
    fontSize: 14,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#242A48',
    textDecorationLine: 'underline',
  },
  name: {
    fontSize: 18,
    marginVertical: 2,
    color: '#242A48',
  },
  ref: {
    fontSize: 14,
    marginVertical: 2,
    color: '#242A48',
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
    color: '#0364D9',
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
    width: '100%',
    backgroundColor: '#164194',
    marginVertical: 10,
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  homeDeliveryText: {
    color: '#FFFFFF',
    fontSize: 16,
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
  seeMore: {
    width: '100%',
    marginVertical: 10,
    ...flexCenter,
    justifyContent: 'center',
  },
  seeMoreText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#164194',
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
  underline: {
    textDecorationLine: 'underline',
    paddingVertical: 5,
  },
  otherArticles: {
    marginVertical: 20,
  },
  blockTitle: {
    color: '#164194',
    fontSize: 22,
    fontWeight: '200',
  },
  minify: {
    fontSize: 20,
    color: '#164194',
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  blockHeader: {
    ...flexCenter,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  advicesTitle: {
    ...flexCenter,
    justifyContent: 'flex-start',
  },
  advicesAverage: {
    fontSize: 22,
    color: '#164194',
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  adviceContainer: {
    margin: 5,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  adviceDate: {
    fontSize: 12,
    color: '#707070',
    marginVertical: 5,
  },
  adviceHeader: {
    ...flexCenter,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  adviceName: {
    fontSize: 18,
    color: '#242A48',
    fontWeight: 'bold',
  },
  scoreCont: {
    ...flexCenter,
    justifyContent: 'flex-end',
  },
  score: {
    color: '#164194',
    fontSize: 14,
    fontWeight: 'bold',
  },
  adviceText: {
    fontSize: 16,
    color: '#242A48',
    marginVertical: 10,
  },
  benefitsTitle: {
    fontSize: 12,
    color: '#707070',
    marginTop: 10,
  },
  benefits: {
    fontSize: 16,
    color: '#707070',
    marginVertical: 5,
  },
  consTitle: {
    fontSize: 12,
    color: '#707070',
  },
  cons: {
    fontSize: 16,
    color: '#707070',
    marginVertical: 5,
    paddingBottom: 10,
  },
  sizeList: {
    ...flexCenter,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  sizeButtonActiv: {
    width: 60,
    borderRadius: 8,
    margin: 5,
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 8,
    color: '#FFFFFF',
    backgroundColor: '#164194',
  },
  sizeButtonTextWhite: {
    color: '#FFFFFF',
  },
  sizeButtonTextBlue: {
    color: '#164194',
  },
  sizeButton: {
    width: 60,
    borderWidth: 1,
    borderColor: '#164194',
    borderRadius: 8,
    margin: 5,
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 8,
    color: '#164194',
  },
  sizeIndication: {
    fontSize: 18,
    color: '#164194',
    marginVertical: 10,
  },
  sizeGuide: {
    marginTop: 10,
    marginBottom: 20,
    ...flexCenter,
    justifyContent: 'flex-start',
  },
  sizeGuideText: {
    color: '#164194',
    textDecorationLine: 'underline',
  },
  infosText: {
    color: '#242A48',
    fontSize: 16,
    marginVertical: 5,
  },
  colorsTitle: {
    fontSize: 16,
    color: '#164194',
    marginTop: 10,
  },
  colors: {
    ...flexCenter,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  activColor: {
    borderWidth: 1,
    borderColor: '#174195',
  },
  color: {
    borderWidth: 1,
    borderColor: '#AEAEAE',
    marginHorizontal: 10,
  },
  deliveryContainer: {
    marginHorizontal: 5,
    marginVertical: 8,
  },
  deliveryLabel: {
    fontSize: 16,
    marginVertical: 2,
    color: '#242A48',
    fontWeight: 'bold',
  },
  deliveryPrice: {
    fontSize: 16,
    marginVertical: 2,
    color: '#0364D9',
  },
  deliveryDelay: {
    fontSize: 16,
    marginVertical: 2,
    color: '#242A48',
  },
})

export default ProductDetail
