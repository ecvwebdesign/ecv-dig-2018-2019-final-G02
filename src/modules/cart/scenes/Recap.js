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
          <View style={styles.headerItem}>
            <TouchableOpacity style={styles.headerActivButton}>
              <Text style={styles.headerActivNumber}>1</Text>
            </TouchableOpacity>
            <Text style={styles.headerActivText}>Votre commande</Text>
          </View>
          <View style={styles.headerLine} />
          <View style={styles.headerItem}>
            <TouchableOpacity style={styles.headerInactivButton}>
              <Text style={styles.headerInactivNumber}>2</Text>
            </TouchableOpacity>
            <Text style={styles.headerInactivText}>Votre commande</Text>
          </View>
          <View style={styles.headerLine} />
          <View style={styles.headerItem}>
            <TouchableOpacity style={styles.headerInactivButton}>
              <Text style={styles.headerInactivNumber}>3</Text>
            </TouchableOpacity>
            <Text style={styles.headerInactivText}>Votre commande</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.title}>Récapitulatif de la commande</Text>
        <Text style={styles.subTitle}>2 articles</Text>
        <View style={styles.product}>
          <View style={styles.productHeader}>
            <View>
              <Text style={styles.marque}>NIKE</Text>
              <Text style={styles.name}>
                Chaussures de tennis femme Court Lite
              </Text>
              <Text style={styles.price}>54 €</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.cross}>x</Text>
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
                <Text style={styles.currentText}>Réf.</Text>
                <Text style={styles.currentText}>Couleur</Text>
                <Text style={styles.currentText}>Taille</Text>
                <Text style={styles.currentText}>Total</Text>
              </View>
              <View style={styles.descInfos}>
                <Text style={styles.currentText}>84.50.48 / 261 36</Text>
                <Text style={styles.currentText}>Rose pastel</Text>
                <Text style={styles.currentText}>36</Text>
                <Text style={styles.productPrice}>28,99 €</Text>
              </View>
            </View>
            <View style={styles.productAction}>
              <View style={styles.quantity}>
                <Text style={styles.quantityText}>Qté. 2 +</Text>
              </View>
              <TouchableOpacity style={styles.favButton}>
                <Image
                  style={{ width: 20, height: 18 }}
                  source={require('../../../commons/assets/images/heart.png')}
                />
                <Text style={styles.favText}>Ajouter au favoris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productHeader}>
            <View>
              <Text style={styles.marque}>NIKE</Text>
              <Text style={styles.name}>
                Chaussures de tennis femme Court Lite
              </Text>
              <Text style={styles.price}>54 €</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.cross}>x</Text>
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
                <Text style={styles.currentText}>Réf.</Text>
                <Text style={styles.currentText}>Couleur</Text>
                <Text style={styles.currentText}>Taille</Text>
                <Text style={styles.currentText}>Total</Text>
              </View>
              <View style={styles.descInfos}>
                <Text style={styles.currentText}>84.50.48 / 261 36</Text>
                <Text style={styles.currentText}>Rose pastel</Text>
                <Text style={styles.currentText}>36</Text>
                <Text style={styles.productPrice}>28,99 €</Text>
              </View>
            </View>
            <View style={styles.productAction}>
              <View style={styles.quantity}>
                <Text style={styles.quantityText}>Qté. 2 +</Text>
              </View>
              <TouchableOpacity style={styles.favButton}>
                <Image
                  style={{ width: 20, height: 18 }}
                  source={require('../../../commons/assets/images/heart.png')}
                />
                <Text style={styles.favText}>Ajouter au favoris</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockHeader}>
            <Text style={styles.blockTitle}>Livraison</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.deliveryItem}>
              <View>
                <View style={styles.radioUncheck} />
              </View>
              <View style={styles.deliveryDetail}>
                <Text style={styles.deliveryText}>Livraison à domicile</Text>
                <Text style={styles.available}>Disponible</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View>
            <TouchableOpacity style={styles.deliveryItem}>
              <View>
                <View style={styles.radioUncheck} />
              </View>
              <View style={styles.deliveryDetail}>
                <Text style={styles.deliveryText}>Retrait en point relais</Text>
                <Text style={styles.available}>Disponible</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View>
            <TouchableOpacity style={styles.deliveryItem}>
              <View>
                <View style={styles.radioUncheck} />
              </View>
              <View style={styles.deliveryDetail}>
                <Text style={styles.deliveryText}>Retrait en magasin</Text>
                <Text style={styles.available}>Disponible</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockHeader}>
            <View>
              <Text style={styles.blockTitle}>Sous-total produit</Text>
              <Text style={styles.blockDetail}>Voir le détail</Text>
            </View>
            <Text style={styles.subTotal}>208.97 €</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.deliveryFees}>
            <Text style={styles.deliveryFeesText}>Frais de livraison</Text>
            <Text style={styles.subTotal}>OFFERT</Text>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.blockHeader}>
            <View>
              <Text style={styles.blockTitle}>TOTAL TTC</Text>
            </View>
            <View style={styles.colEnd}>
              <Text style={styles.totalPrice}>208.97 €</Text>
            </View>
            <View style={styles.colEnd}>
              <Text style={styles.savings}>Economie réalisée : 26,00 €</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.validationButton}
            onPress={() => navigation.navigate('InqueriesInfos')}
          >
            <Text style={styles.validationText}>Traiter la commande</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.otherArticles}>
        <Text style={styles.infosHeaderText}>Compléter avec vos favoris</Text>
        <OtherArticles navigation={navigation} />
      </View>
    </ScrollView>
  )
}

Recap.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  blockContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
  },
  blockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  blockTitle: {
    color: '#164194',
    fontSize: 22,
    fontWeight: '200',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  headerItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerActivButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    backgroundColor: '#0364D9',
    borderRadius: 8,
  },
  headerActivNumber: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  headerActivText: {
    marginVertical: 5,
    color: '#0364D9',
    fontSize: 12,
  },
  headerInactivButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 8,
  },
  headerInactivNumber: {
    fontSize: 14,
    color: '#707070',
  },
  headerInactivText: {
    marginVertical: 5,
    color: '#707070',
    fontSize: 12,
  },
  headerLine: {
    width: 10,
    height: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
    marginTop: 17,
  },
  titleHeader: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
    marginTop: 10,
    color: '#164194',
    fontWeight: '300',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#164194',
  },
  product: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cross: {
    color: '#242A48',
    fontSize: 18,
    fontWeight: 'bold',
  },
  marque: {
    fontSize: 16,
    color: '#242A48',
    textDecorationLine: 'underline',
  },
  name: {
    fontSize: 14,
    color: '#242A48',
  },
  price: {
    fontSize: 14,
    color: '#242A48',
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#0364D9',
    fontWeight: 'bold',
    fontSize: 12,
  },
  currentText: {
    fontSize: 12,
    color: '#242A48',
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
    marginVertical: 10,
  },
  quantity: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#174195',
    borderRadius: 8,
  },
  quantityText: {
    color: '#174195',
    fontSize: 16,
  },
  favButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#174195',
    borderRadius: 8,
  },
  favText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 5,
  },
  deliveryItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  colEnd: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  radioUncheck: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#164194',
    borderRadius: 50,
  },
  deliveryText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#164194',
  },
  available: {
    color: '#1FB414',
    fontSize: 16,
    fontWeight: '600',
  },
  subTotal: {
    color: '#0364D9',
    fontSize: 18,
  },
  blockDetail: {
    color: '#164194',
    fontSize: 16,
    fontWeight: '700',
  },
  deliveryFees: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  deliveryFeesText: {
    fontSize: 16,
    color: '#164194',
  },
  deliveryDetail: {
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 20,
    color: '#0364D9',
    fontWeight: 'bold',
  },
  savings: {
    fontSize: 14,
    color: '#E30613',
    marginVertical: 5,
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
  validationButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#164194',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  validationText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
})

export default Recap
