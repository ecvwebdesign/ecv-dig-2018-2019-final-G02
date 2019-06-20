import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class Example extends React.PureComponent {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Sign up</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    color: 'red',
  },
})

export default Example
