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
import OtherArticles from '../../catalogue/components/OtherArticles'

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>←</Text>
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Panier</Text>
        </View>
        <Text style={styles.title}>Récapitulatif de la commande</Text>
        <Text style={styles.subTitle}>2 articles</Text>
        <View style={styles.product}>
          <View style={styles.productHeader}>
            <View>
              <Text>NIKE</Text>
              <Text>Chaussures de tennis femme</Text>
              <Text>54</Text>
            </View>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.descContainer}>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
                }}
              />
              <View style={styles.descLabel}>
                <Text>Réf</Text>
                <Text>Couleur</Text>
                <Text>Taille</Text>
                <Text>Total</Text>
              </View>
              <View style={styles.descInfos}>
                <Text>84.50.48 / 261 36</Text>
                <Text>Rose pastel</Text>
                <Text>36</Text>
                <Text>28,99 €</Text>
              </View>
            </View>
            <View style={styles.productAction}>
              <View>
                <Text>Qté. 2</Text>
              </View>
              <TouchableOpacity style={styles.productFav}>
                <Image
                  style={{ width: 20, height: 17 }}
                  source={require('../../../commons/assets/images/heart.png')}
                />
                <Text>Ajouter au favoris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productHeader}>
            <View>
              <Text>NIKE</Text>
              <Text>Chaussures de tennis femme</Text>
              <Text>54</Text>
            </View>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.descContainer}>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri:
                    'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$',
                }}
              />
              <View style={styles.descLabel}>
                <Text>Réf</Text>
                <Text>Couleur</Text>
                <Text>Taille</Text>
                <Text>Total</Text>
              </View>
              <View style={styles.descInfos}>
                <Text>84.50.48 / 261 36</Text>
                <Text>Rose pastel</Text>
                <Text>36</Text>
                <Text>28,99 €</Text>
              </View>
            </View>
            <View style={styles.productAction}>
              <View>
                <Text>Qté. 2</Text>
              </View>
              <TouchableOpacity style={styles.productFav}>
                <Image
                  style={{ width: 20, height: 17 }}
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
      <View style={styles.otherArticles}>
        <Text style={styles.infosHeaderText}>Articles Complémentaire</Text>
        <OtherArticles navigation={navigation} />
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
    alignItems: 'center',
    marginVertical: 5,
  },
  titleHeader: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 30,
  },
  product: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'grey',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  descLabel: {
    width: 80,
    marginLeft: 10,
  },
  productAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  productFav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingLeft: 5,
    marginVertical: 5,
  },
  image: {
    width: '100%',
  },
  otherArticles: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  infosHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default Recap
