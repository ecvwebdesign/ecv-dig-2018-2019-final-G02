import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import theme from '../../../themes/default'

const Cart = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Cart</Text>
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

export default Cart
