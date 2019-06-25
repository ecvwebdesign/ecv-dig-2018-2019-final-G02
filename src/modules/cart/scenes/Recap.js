import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import getImageSize from '../../../commons/utils/images'
import CustomImage from '../../../commons/components/CustomImage'

const Recap = ({ navigation }) => {
  const aspectRatio = 150 / 150
  const imageSizes = getImageSize(aspectRatio, 10)

  const handleProductPress = (idProduct) => {
    navigation.navigate('ProductDetail', {
      id: idProduct,
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{'<'}</Text>
          <Text style={styles.titleHeader}>Panier</Text>
        </View>
        <View>
          <Text>Récapitulatif de la commande</Text>
          <Text>2 articles</Text>
        </View>
        <View>
          <View>
            <View>
              <Text>NIKE</Text>
              <TouchableOpacity>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <Text>Chaussures de tennis femme</Text>
            <Text>54</Text>
          </View>
          <View>
            <Image
              style={{ width: 75, height: 75 }}
              source={{
                uri:
                  'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
              }}
            />
            <View>
              <Text>Réf</Text>
              <Text>Couleur</Text>
              <Text>Taille</Text>
              <Text>Total</Text>
            </View>
            <View>
              <Text>84.50.48 / 261 36 28,99 €</Text>
              <Text>Rose pastel</Text>
              <Text>36</Text>
              <Text>28,99 €</Text>
            </View>
            <View>
              <Text>Quantité: 2</Text>
              <TouchableOpacity>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../commons/assets/images/heart.png')}
                />
                <Text>Ajouter au favoris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View>
            <View>
              <Text>NIKE</Text>
              <TouchableOpacity>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <Text>Chaussures de tennis femme</Text>
            <Text>54</Text>
          </View>
          <View>
            <Image
              style={{ width: 75, height: 75 }}
              source={{
                uri:
                  'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
              }}
            />
            <View>
              <Text>Réf</Text>
              <Text>Couleur</Text>
              <Text>Taille</Text>
              <Text>Total</Text>
            </View>
            <View>
              <Text>84.50.48 / 261 36 28,99 €</Text>
              <Text>Rose pastel</Text>
              <Text>36</Text>
              <Text>28,99 €</Text>
            </View>
            <View>
              <Text>Quantité: 2</Text>
              <TouchableOpacity>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../commons/assets/images/heart.png')}
                />
                <Text>Ajouter au favoris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text>Livraison</Text>
          <View>
            <TouchableOpacity>
              {/* <Image /> */}
              <Text>A domicile</Text>
              <Text>9,99</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              {/* <Image /> */}
              <Text>Retrait en point relais</Text>
              <Text>Offert</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              {/* <Image /> */}
              <Text>Retrait en magasin</Text>
              <Text>Gratuit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Text>Sous-total produits</Text>
            <Text>200</Text>
          </View>
          <View>
            <Text>Livraison</Text>
            <Text>200</Text>
          </View>
          <View>
            <Text>Total TTC</Text>
            <Text>200</Text>
          </View>
          <View>
            {/* <Image /> */}
            <Text>TVA incluse</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('InqueriesInfos')}
          >
            <Text>Traiter la commande</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Complétez avec vos favoris</Text>
        <View style={styles.productContainer}>
          <TouchableOpacity onPress={() => handleProductPress('543876')}>
            <View>
              <CustomImage
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
                }}
                width={imageSizes.width / 2}
                height={imageSizes.height / 2}
              />
              <View style={styles.textContainer}>
                <Text>MARQUE</Text>
                <Text>Hello</Text>
                <Text>200</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleProductPress('543876')}>
            <View>
              <CustomImage
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
                }}
                width={imageSizes.width / 2}
                height={imageSizes.height / 2}
              />
              <View style={styles.textContainer}>
                <Text>MARQUE</Text>
                <Text>Hello</Text>
                <Text>200</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

Recap.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
  },
  titleHeader: {
    fontSize: 22,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
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
  productContainer: {
    width: '46%',
    marginHorizontal: '1%',
    marginVertical: 10,
  },
  textContainer: {
    paddingLeft: 5,
    marginVertical: 5,
  },
  image: {
    width: '100%',
  },
})

export default Recap
