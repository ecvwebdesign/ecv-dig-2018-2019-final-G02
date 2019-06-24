import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import theme from '../../../themes/default'

const Recap = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{'<'}</Text>
      <Text style={styles.titleHeader}>Panier</Text>
    </View>
    <Text style={styles.title}>
      Paiement
    </Text>
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
