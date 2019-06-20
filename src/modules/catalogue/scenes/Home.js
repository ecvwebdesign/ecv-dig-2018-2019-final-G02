import React, { useState } from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import i18n from '../../../i18n/i18n'
import theme from '../../../themes/default'
import Api from '../../../api/api'
import Loader from '../../../commons/components/Loader'
import Button from '../../../commons/components/Button'

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello</Text>
  </View>
)


Home.propTypes = {
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

export default Home
