import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

const InqueriesInfos = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')

  const onNameChange = (inputName) => {
    setName(inputName)
  }

  const onEmailChange = (inputEmail) => {
    setEmail(inputEmail)
  }

  const onBirthdateChange = (inputBirthdate) => {
    setBirthdate(inputBirthdate)
  }

  const onAddressChange = (inputAddress) => {
    setAddress(inputAddress)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{'<'}</Text>
        <Text style={styles.titleHeader}>Panier</Text>
      </View>
      <Text style={styles.title}>
        Informations de la commande
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onNameChange}
          placeholder="Nom"
          value={name}
          maxLength={256}
        />
        <TextInput
          style={styles.input}
          onChangeText={onEmailChange}
          value={email}
          placeholder="test@test.com"
          keyboardType="email-address"
          maxLength={256}
          autoCapitalize="characters"
        />
        <TextInput
          style={styles.input}
          onChangeText={onBirthdateChange}
          placeholder="Date de naissance"
          value={birthdate}
          maxLength={256}
        />
        <TextInput
          style={styles.input}
          onChangeText={onAddressChange}
          placeholder="Date de naissance"
          value={address}
          maxLength={256}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Paiement')}>
          <Text>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

InqueriesInfos.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
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

export default InqueriesInfos
