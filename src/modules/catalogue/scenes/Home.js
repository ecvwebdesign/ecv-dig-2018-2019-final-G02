import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../../themes/default'

const Home = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const onSearchChange = (searchInput) => {
    setSearch(searchInput)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onSearchChange}
        value={search}
        placeholder="Taper votre recherche..."
        maxLength={256}
      />
      <View style={styles.categorieContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('PrivateSales')}>
            <Text>Ventes Privées</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categorieContainer}>
        <View style={styles.halfContainerLeft}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('ProductsList')}>
            <Text>Sport</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.halfContainerRight}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('ProductsList')}>
            <Text>Marques</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.common.defaultSidePadding,
  },
  categorieContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222222',
  },
  halfContainerLeft: {
    width: '48%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1%',
    borderWidth: 1,
    borderColor: '#222222',
  },
  halfContainerRight: {
    width: '48%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1%',
    borderWidth: 1,
    borderColor: '#222222',
  },
  buttonWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 20,
  },
})

export default Home
