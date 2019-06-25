import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'
import CustomImage from '../../../commons/components/CustomImage'
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
                <Text>MARQUE</Text>
                <Text>Nom du produit</Text>
                <Text>30</Text>
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
                <Text>MARQUE</Text>
                <Text>Nom du produit</Text>
                <Text>30</Text>
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
                <Text>MARQUE</Text>
                <Text>Nom du produit</Text>
                <Text>30</Text>
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
