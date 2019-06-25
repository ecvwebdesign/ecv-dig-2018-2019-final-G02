import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'

const Home = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const onSearchChange = (searchInput) => {
    setSearch(searchInput)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.marketModeContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MarketScanner')}
          >
            <Text style={styles.marketModeTitle}>Activer le mode magasin</Text>
            <Text>
              L’application s’adapte à votre magasin et à vos préférences
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Image
            style={{ width: 15, height: 15 }}
            source={require('../../../commons/assets/images/search-icon.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onSearchChange}
            value={search}
            placeholder="Taper votre recherche..."
            maxLength={256}
          />
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductScanner')}
            >
              <Image
                style={styles.barcode}
                source={require('../../../commons/assets/images/barcode.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Ventes Privées</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.halfContainerLeft}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <Text>Sport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.halfContainerRight}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <Text>Marques</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Femmes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Hommes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Enfants</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Vélos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')}>
              <Text>Matériels Volumineux</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.rsTitle}>Suivez nos aventures</Text>
          <View style={styles.rsContainer}>
            <TouchableOpacity style={styles.rsButton}>
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rsButton}>
              <Text>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  marketModeContainer: {
    marginVertical: 5,
    backgroundColor: 'grey',
    padding: 10,
  },
  marketModeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
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
  input: {},
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  barcode: {
    width: 30,
    height: 20,
  },
  rsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  rsButton: {
    margin: 10,
  },
  rsTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 30,
  },
})

export default Home
