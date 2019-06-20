import React, { useState } from 'react'
import {
  StyleSheet, View, TextInput, SafeAreaView, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import i18n from '../../../i18n/i18n'
import theme from '../../../themes/default'
import Api from '../../../api/api'
import Loader from '../../../commons/components/Loader'
import Button from '../../../commons/components/Button'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const EMAIL_DEFAULT_PLACEHOLDER = 'test@test.com'
  const PASSWORD_DEFAULT_PLACEHOLDER = 'password'

  const onEmailChange = (emailAddress) => {
    setEmail(emailAddress)
  }

  const onPasswordChange = (pass) => {
    setPassword(pass)
  }

  const handleLoginPress = async () => {
    // TODO handle backend connexion
    setLoading(true)
    const response = await Api.authLogin(email, password)

    if (response) {
      setLoading(false)
      navigation.navigate('')
    }
    setLoading(false)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          {`${i18n.t('login.title')}`}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onEmailChange}
          value={email}
          placeholder={EMAIL_DEFAULT_PLACEHOLDER}
          keyboardType="email-address"
          maxLength={256}
          autoFocus
        />
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          placeholder={PASSWORD_DEFAULT_PLACEHOLDER}
          value={password}
          maxLength={256}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          {loading ? (
            <Loader />
          ) : (
            <Button onPress={handleLoginPress} label="Valider" />
          )}
        </View>
        <Button onPress={() => navigation.navigate('Signup')} label="Sign up" />
      </View>
    </SafeAreaView>
  )
}

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

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

export default Login
