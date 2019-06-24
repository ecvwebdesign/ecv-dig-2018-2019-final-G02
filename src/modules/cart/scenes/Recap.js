import React from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, Image,
} from 'react-native'
import PropTypes from 'prop-types'

const Recap = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{'<'}</Text>
      <Text style={styles.titleHeader}>Panier</Text>
    </View>
    <Text style={styles.title}>
      Récapitulatif de la commande
    </Text>
    <Text>2 articles</Text>
    <View>
      <View>
        <Image source={{ uri: 'https://media.intersport.fr/is/image/intersportfr/861778_394_Q1?$produit_l$' }} />
      </View>
      <View>
        <Text>Chaussures</Text>
        <Text>Taille</Text>
        <Text>Quantité</Text>
      </View>
    </View>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('InqueriesInfos')}>
        <Text>Suivant</Text>
      </TouchableOpacity>
    </View>
  </View>
)

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
})

export default Recap
