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
            <TouchableOpacity style={styles.seeMore}>
              <Text style={styles.seeMoreText}>Infos sur le produit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.localization}>
              <Text style={styles.localizationText}>
                Localiser dans mon magasin
              </Text>
            </TouchableOpacity>
            <View style={styles.colorContainer}>
              <Text style={styles.colorsTitle}>Choisir une couleur :</Text>
              <View style={styles.colors}>
                <TouchableOpacity style={styles.activColor}>
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
            <View style={styles.sizeContainer}>
              <View style={styles.sizeHeader}>
                <Text style={styles.sizeHeaderText}>Choisir une taille :</Text>
                <TouchableOpacity style={styles.sizeGuide}>
                  <Text style={styles.underline}>Guide des taille</Text>
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
            </View>
            <View style={styles.supplyContainer}>
              <View style={styles.supplyContent}>
                <View style={styles.supplyValidation}>
                  <Image
                    style={{ width: 18, height: 16 }}
                    source={require('../../../commons/assets/images/home.png')}
                  />
                  <Text style={styles.supplyValidate}>En Stock</Text>
                </View>
                <Text style={styles.supplyWarning}>Plus que 3 produits</Text>
              </View>
            </View>
            <View style={styles.bookProduct}>
              <TouchableOpacity style={styles.bookMarket}>
                <Text style={styles.bookText}>Reserver en magasin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookItem}>
                <Text style={styles.bookText}>Ajouter au panier</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.supplyContainer}>
              <Text style={styles.marketText}>Réserver en magasin :</Text>
              <View style={styles.bookProduct}>
                <View>
                  {/* <Image /> */}
                  <Text style={styles.supplyWarning}>Indisponible</Text>
                </View>
                <Text style={styles.free}>Gratuit</Text>
              </View>
            </View>
            <View style={styles.supplyContainer}>
              <Text style={styles.marketText}>Retrait en magasin :</Text>
              <View style={styles.bookProduct}>
                <View>
                  {/* <Image /> */}
                  <Text style={styles.supplyValidate}>Disponible</Text>
                </View>
                <Text style={styles.free}>Gratuit</Text>
              </View>
            </View>
            <View style={styles.supplyContainer}>
              <Text style={styles.marketText}>Livraison à domicile :</Text>
              <View style={styles.deliveryProduct}>
                <Image
                  style={{ width: 16, height: 22 }}
                  source={require('../../../commons/assets/images/bag.png')}
                />
                <View style={styles.deliveryInfos}>
                  <Text style={styles.deliveryText}>
                    Expédition à partir du 29 juin
                  </Text>
                  <View style={styles.deliveryPay}>
                    <Text style={styles.supplyValidate}>Disponible</Text>
                    <Text style={styles.free}>4.99 €</Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <Text style={styles.marketText}>Livraison en point relais :</Text>
              <View style={styles.deliveryProduct}>
                <Image
                  style={{ width: 16, height: 22 }}
                  source={require('../../../commons/assets/images/bag.png')}
                />
                <View style={styles.deliveryInfos}>
                  <Text style={styles.deliveryText}>
                    Expédition à partir du 29 juin
                  </Text>
                  <View style={styles.deliveryPay}>
                    <Text style={styles.supplyValidate}>Disponible</Text>
                    <Text style={styles.free}>4.99 €</Text>
                  </View>
                </View>
              </View>
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
const blockContainer = {
  backgroundColor: '#FFFFFF',
  padding: 15,
  marginVertical: 10,
}
const flexCenter = {
  flexDirection: 'row',
  alignItems: 'center',
}

const styles = StyleSheet.create({
  blockContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
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
  iconOne: {
    width: 30,
    height: 27,
  },
  iconTwo: {
    width: 23,
    height: 30,
  },
  seeMore: {
    width: '100%',
    marginVertical: 10,
    ...flexCenter,
    justifyContent: 'center',
  },
  seeMoreText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#164194',
    marginTop: 10,
    marginBottom: 10,
  },
  localization: {
    width: '100%',
    backgroundColor: '#164194',
    marginVertical: 10,
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  localizationText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  colorContainer: { ...blockContainer },
  colorsTitle: {
    fontSize: 14,
    color: '#164194',
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
  sizeContainer: {
    ...blockContainer,
  },
  sizeHeader: {
    ...flexCenter,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sizeHeaderText: {
    fontSize: 18,
    color: '#164194',
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
  sizeGuide: {
    marginVertical: 10,
    textDecorationLine: 'underline',
    fontSize: 14,
    color: '#164194',
  },
  supplyContainer: {
    ...blockContainer,
  },
  supplyContent: {
    ...flexCenter,
    justifyContent: 'space-between',
  },
  supplyValidation: {
    ...flexCenter,
    justifyContent: 'space-between',
  },
  supplyValidate: {
    fontSize: 16,
    color: '#1FB414',
  },
  supplyWarning: {
    fontSize: 16,
    color: '#E30613',
  },
  underline: {
    textDecorationLine: 'underline',
    paddingVertical: 5,
    color: '#164194',
  },
  bookProduct: {
    ...flexCenter,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookItem: {
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#174195',
  },
  bookMarket: {
    ...flexCenter,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#0364D9',
  },
  bookText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  marketText: {
    color: '#242A48',
    fontSize: 18,
  },
  free: {
    color: '#0364D9',
    textTransform: 'uppercase',
  },
  deliveryProduct: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  deliveryInfos: {
    marginLeft: 10,
    flexGrow: 1,
  },
  deliveryText: {
    color: '#242A48',
    marginVertical: 5,
  },
  deliveryPay: {
    ...flexCenter,
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
  },
})

export default ProductDetail
