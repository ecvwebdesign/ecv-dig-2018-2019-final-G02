import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import theme from '../../../themes/default'

const Recap = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
      <View style={styles.blockContainer}>
        <View style={styles.blockCentered}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../../commons/assets/images/check_rond.png')}
          />
          <Text style={styles.validationText}>Merci pour votre commande</Text>
        </View>
        <Text style={styles.validationLongText}>
            Votre commande a été validée. Elle sera préparée avec soin par nos
            équipes. Vous trouverez les détails de la commande ci-dessous et un
            e-mail de confirmation vous a été envoyé à : clairemasse@gmail.com
        </Text>
        <View style={styles.blockCentered}>
          <TouchableOpacity>
            <Text style={styles.textBlues}>
                Mauvais e-mail ? Modifiez-le ici
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.blockContainer}>
        <Text>Numéro de commande n° 06965690</Text>
        <Text>Date de la commande 23/06/2019</Text>
      </View>
      <View style={styles.blockContainer}>
        <View style={styles.blockHeader}>
          <Text style={styles.blockTitle}>N'oubliez pas</Text>
        </View>
        <Text style={styles.currentText}>
            Vous pouvez suivre à tout moment l’acheminement de votre colis dans
            votre espace personnel.
        </Text>
        <View style={styles.line} />
        <View style={styles.blockHeader}>
          <Text style={styles.blockTitle}>Retrait en point relais</Text>
        </View>
        <View>
          <Text style={styles.boldText}>Le fumoir de la régence</Text>
          <Text style={styles.currentText}>73 Cours Albret</Text>
          <Text style={styles.currentText}>33000 Bordeaux</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.blockHeader}>
          <Text style={styles.blockTitle}>Détails de la commande</Text>
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
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.blockHeader}>
          <Text style={styles.blockTitle}>Paiement par carte VISA</Text>
        </View>
        <View style={styles.flexBetween}>
          <Text style={styles.currentText}>Sous-total produits</Text>
          <Text style={styles.currentText}>208,97 €</Text>
        </View>
        <View style={styles.flexBetween}>
          <Text style={styles.currentText}>Frais de livraison</Text>
          <Text style={styles.currentText}>OFFERT</Text>
        </View>
        <View style={styles.flexBetween}>
          <Text style={styles.totalText}>TOTAL TTC</Text>
          <Text style={styles.totalPrice}>208,97 €</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.nextText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 32,
    marginTop: 10,
    color: '#164194',
    fontWeight: '200',
  },
  validationText: {
    color: '#1FB414',
    fontSize: 18,
    marginVertical: 10,
  },
  textBlues: {
    color: '#164194',
    fontSize: 16,
    marginVertical: 15,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginVertical: 15,
  },
  blockContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
  },
  blockTitle: {
    color: '#164194',
    fontSize: 22,
    fontWeight: '200',
    marginBottom: 15,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blockCentered: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    color: '#242A48',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
  },
  currentText: {
    color: '#242A48',
    fontSize: 14,
  },
  marque: {
    fontSize: 18,
    color: '#242A48',
    textDecorationLine: 'underline',
  },
  name: {
    fontSize: 16,
    color: '#242A48',
  },
  price: {
    fontSize: 16,
    color: '#242A48',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productPrice: {
    color: '#0364D9',
    fontWeight: 'bold',
    fontSize: 14,
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
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  totalText: {
    color: '#242A48',
    fontSize: 14,
  },
  totalPrice: {
    color: '#0364D9',
    fontSize: 14,
  },
  nextButton: {
    width: '100%',
    backgroundColor: '#164194',
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  nextText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
})

export default Recap
