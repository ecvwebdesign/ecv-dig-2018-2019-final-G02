import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native'

const Paiement = ({ navigation }) => {
  const [card, setCard] = useState('')
  const [year, setYear] = useState('')
  const [cvv, setCVV] = useState('')

  const onCardChange = (searchInput) => {
    setCard(searchInput)
  }

  const onCVVChange = (searchInput) => {
    setCVV(searchInput)
  }

  const onYearChange = (searchInput) => {
    setYear(searchInput)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.headerPassedButton}
              onPress={() => navigation.navigate('Recap')}
            >
              <Text style={styles.headerActivNumber}>1</Text>
            </TouchableOpacity>
            <Text style={styles.headerInactivText}>Votre commande</Text>
          </View>
          <View style={styles.headerLine} />
          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.headerPassedButton}
              onPress={() => navigation.navigate('InqueriesInfos')}
            >
              <Text style={styles.headerActivNumber}>2</Text>
            </TouchableOpacity>
            <Text style={styles.headerInactivText}>Votre information</Text>
          </View>
          <View style={styles.headerLine} />
          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.headerActivButton}
              onPress={() => navigation.navigate('Paiement')}
            >
              <Text style={styles.headerActivNumber}>3</Text>
            </TouchableOpacity>
            <Text style={styles.headerActivText}>Paiement sécurisé</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.title}>Paiement sécurisé</Text>
        <View>
          <View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>Récapitulatif</Text>
              </View>
              <View style={styles.recap}>
                <Text style={styles.recapNumber}>2 articles</Text>
                <TouchableOpacity style={styles.recapButton}>
                  <Text style={styles.recapText}>Voir le detail +</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
              <View style={styles.deliveryFees}>
                <Text style={styles.deliveryFeesText}>Frais de livraison</Text>
                <Text style={styles.deliveryPrice}>OFFERT</Text>
              </View>
            </View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>TOTAL TTC</Text>
                <Text style={styles.totalPrice}>208.97 €</Text>
              </View>
            </View>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <Text style={styles.blockTitle}>Carte bancaire</Text>
                <Image
                  style={{ width: 123, height: 36 }}
                  source={require('../../../commons/assets/images/logo_visa.png')}
                />
              </View>
              <ImageBackground
                style={styles.imageBackground}
                source={require('../../../commons/assets/images/carte.png')}
              >
                <TouchableOpacity style={styles.iconButton}>
                  <Image
                    style={{ width: 14, height: 11 }}
                    source={require('../../../commons/assets/images/camera.png')}
                  />
                  <Text style={styles.iconText}>Scanner la carte</Text>
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.cardContainer}>
                <Image
                  style={{ width: 10, height: 13, marginHorizontal: 5 }}
                  source={require('../../../commons/assets/images/cadena.png')}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onCardChange}
                  value={card}
                  placeholder="Numéro de carte"
                  maxLength={256}
                />
              </View>
              <View style={styles.dualInput}>
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={onYearChange}
                  value={year}
                  placeholder="MM/AA"
                  maxLength={256}
                />
                <TextInput
                  style={styles.inputHalf}
                  onChangeText={onCVVChange}
                  value={cvv}
                  placeholder="CVV"
                  maxLength={256}
                />
              </View>
              <View style={styles.checkContainer}>
                <View style={styles.check} />
                <Text style={styles.checkText}>Enregistrer la carte</Text>
              </View>
            </View>

            <View style={{ paddingHorizontal: 15, flexDirection: 'row' }}>
              <Image
                style={{ width: 10, height: 13, marginHorizontal: 5 }}
                source={require('../../../commons/assets/images/cadena.png')}
              />
              <Text>
                Les informations que vous nous transmettez sur cette page sont
                cryptées, vous pouvez saisir vos données bancaires en toute
                sécurité.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('CartValidation')}
            >
              <Text style={styles.nextText}>Valider le paiement</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
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
  title: {
    fontSize: 32,
    marginTop: 10,
    color: '#164194',
    fontWeight: '200',
  },
  container: {
    padding: 15,
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
  headerPassedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    backgroundColor: '#164194',
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
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
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
  deliveryPrice: {
    fontSize: 16,
    color: '#0364D9',
  },
  totalPrice: {
    fontSize: 20,
    color: '#0364D9',
    fontWeight: 'bold',
  },
  imageBackground: {
    marginVertical: 10,
    width: 300,
    height: 155,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: 180,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#0364D9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 5,
  },
  recap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  recapNumber: {
    color: '#000000',
    fontSize: 14,
  },
  recapButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recapText: {
    fontSize: 16,
    color: '#164194',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AEAEAE',
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  inputHalf: {
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '46%',
    marginVertical: '1%',
  },
  dualInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
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
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#242A48',
    borderRadius: 3,
  },
  checkText: {
    color: '#242A48',
    fontSize: 12,
    marginHorizontal: 5,
  },
  nextText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
})

export default Paiement
