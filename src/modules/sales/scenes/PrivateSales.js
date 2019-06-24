import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import ProductsList from '../../catalogue/components/ProductsList'
import products from '../../../commons/utils/fakeData.json'

const PrivateSales = ({ navigation }) => {
  const [modalOpened, setModalOpened] = useState(false)

  const openModal = () => {
    setModalOpened(!modalOpened)
  }

  if (modalOpened) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Filtres</Text>
          <TouchableOpacity onPress={openModal}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.title}>Ventes Privées</Text>
        <Text>Description</Text>
        <View style={styles.categorieContainer}>
          <View style={styles.halfContainerLeft}>
            <TouchableOpacity style={styles.buttonWrapper} onPress={openModal}>
              <Text>filtres</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.halfContainerRight}>
            <TouchableOpacity style={styles.buttonWrapper} onPress={openModal}>
              <Text>tri</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ProductsList navigation={navigation} products={products} />
      </ScrollView>
    </View>
  )
}


PrivateSales.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerText: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 30,
  },
  categorieContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
    marginVertical: 10,
  },
})

export default PrivateSales
