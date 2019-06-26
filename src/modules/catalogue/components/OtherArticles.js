import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'
import getImageSize from '../../../commons/utils/images'

const aspectRatio = 150 / 150
const imageSizes = getImageSize(aspectRatio, 10)

const OtherArticles = ({ navigation }) => {
  const handleProductPress = (idProduct) => {
    navigation.navigate('ProductDetail', {
      id: idProduct,
    })
  }

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productContainer} key={54376}>
          <TouchableOpacity onPress={() => handleProductPress(543876)}>
            <View>
              <Image
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/Y8SUQ3_29K_PR?$produit_l$',
                }}
                style={styles.productImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.marque}>NIKE</Text>
                <Text style={styles.name}>
                  T-shirt manches longues femme FFF W Tee Travel
                </Text>
                <Text style={styles.price}>21.99 €</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer} key={43876}>
          <TouchableOpacity onPress={() => handleProductPress(543876)}>
            <View>
              <Image
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/Y8SUQ3_29K_PR?$produit_l$',
                }}
                style={styles.productImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.marque}>NIKE</Text>
                <Text style={styles.name}>
                  T-shirt manches longues femme FFF W Tee Travel
                </Text>
                <Text style={styles.price}>21.99 €</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer} key={54387}>
          <TouchableOpacity
            style={styles.productButton}
            onPress={() => handleProductPress(543876)}
          >
            <View>
              <Image
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/Y8SUQ3_29K_PR?$produit_l$',
                }}
                style={styles.productImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.marque}>ENERGETICS</Text>
                <Text style={styles.name}>Short de training femme Leila</Text>
                <Text style={styles.price}>31.99 €</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

OtherArticles.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
  price: {
    fontSize: 18,
    marginVertical: 10,
    color: '#0364D9',
  },
  productContainer: {
    width: imageSizes.width / 2,
  },
  productImage: {
    width: imageSizes.width / 2 - 40,
    height: imageSizes.width / 2 - 40,
  },
  productButton: {
    padding: 5,
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

export default OtherArticles
