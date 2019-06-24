import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../../themes/default'
import ProductsList from '../components/ProductsList'
import products from '../../../commons/utils/fakeData.json'

const ProductCategorie = ({ navigation }) => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Listes Produits</Text>
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
    </View>
  )
}


ProductCategorie.propTypes = {
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

export default ProductCategorie

