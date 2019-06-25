import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
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
        <Text style={styles.titleHeader}>Informations</Text>
      </View>
      <Text style={styles.title}>Informations de la commande</Text>
      <View>
        <View>
          <View>
            <Text>Claire Massé</Text>
            <Text>38 Cours Pasteur</Text>
            <Text>33000 Bordeaux</Text>
            <Text>+33 6 05 05 05 05</Text>
            <Text>clairemasse@gmail.com</Text>
          </View>
          <View>
            <TouchableOpacity>{/* <Image /> */}</TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log('Hello')}>
          <Text>Ajouter une adresse de facturation</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Paiement')}>
          <Text>Finaliser la commande</Text>
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
    fontSize: 20,
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
