import React from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, Image,
} from 'react-native'
import theme from '../../../themes/default'

const Recap = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{'<'}</Text>
    </View>
    <Text style={styles.title}>Votre commande a été validée !</Text>
    <Text>un e-mail de confirmation vous a été envoyé à :</Text>
    <Text>clairemasse@gmail.com</Text>

    <Text>Numero de commande 34567898765</Text>
    <Text>Date de la commande 23/06/2019</Text>
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
          <Text>Quantité</Text>
          <Text>Total</Text>
        </View>
        <View>
          <Text>84.50.48 / 261 36 28,99 €</Text>
          <Text>Rose pastel</Text>
          <Text>36</Text>
          <Text>x2</Text>
          <Text>28,99 €</Text>
        </View>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.common.defaultSidePadding,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
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
