import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
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
            style={styles.marketModeButton}
            onPress={() => navigation.navigate('MarketScanner')}
          >
            <Image
              style={{ width: 20, height: 14, marginTop: 5 }}
              source={require('../../../commons/assets/images/camera.png')}
            />
            <View style={{ marginHorizontal: 5 }}>
              <Text style={styles.marketModeTitle}>
                Activer le mode magasin
              </Text>
              <Text style={styles.marketModeSubtitle}>
                L’application s’adapte à votre magasin et à vos préférences
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductScanner')}
            >
              <Image
                style={styles.barcode}
                source={require('../../../commons/assets/images/codebarre.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{ width: '100%', height: '100%' }}
              onPress={() => navigation.navigate('Sales')}
            >
              <Image
                style={{ width: '100%', height: '100%' }}
                source={require('../../../commons/assets/images/promo.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.halfContainerLeft}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <Text style={styles.categorieText}>Sport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.halfContainerRight}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <Text style={styles.categorieText}>Marques</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.categorie}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <View style={styles.fakeImage}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={require('../../../commons/assets/images/femme.jpg')}
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.categorieName}>Femme</Text>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Textile</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Chaussures</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.categorie}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <View style={styles.fakeImage}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={require('../../../commons/assets/images/homme.jpg')}
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.categorieName}>Homme</Text>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Textile</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Chaussures</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.categorie}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <View style={styles.fakeImage}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={require('../../../commons/assets/images/enfant.jpg')}
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.categorieName}>Enfant</Text>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Textile</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.subCategorie}>
                  <Text style={styles.subCategorieText}>Chaussures</Text>
                  <Image
                    style={{ width: 6, height: 10 }}
                    source={require('../../../commons/assets/images/droite.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categorieContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{ width: '100%', height: '100%' }}
              onPress={() => navigation.navigate('ProductsCategorie')}
            >
              <ImageBackground
                style={styles.imageBackground}
                source={require('../../../commons/assets/images/velo.jpg')}
              >
                <Text style={styles.categorieText}>Vélos, VTT, VTC</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.rsTitle}>Suivez nos aventures</Text>
          <View style={styles.rsContainer}>
            <TouchableOpacity style={styles.rsButton}>
              <Text style={styles.rsText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rsButton}>
              <Text style={styles.rsText}>Instagram</Text>
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
  imageBackground: {
    marginVertical: 10,
    width: '100%',
    height: 110,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  marketModeContainer: {
    marginVertical: 5,
    backgroundColor: '#164194',
    borderRadius: 8,
    padding: 15,
  },
  marketModeButton: {
    flexDirection: 'row',
  },
  marketModeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  marketModeSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F7F7F7',
  },
  barcode: {
    width: 30,
    height: 20,
  },
  categorieContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 160,
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
    backgroundColor: '#164194',
  },
  categorie: {
    flexDirection: 'row',
    height: '100%',
  },
  fakeImage: {
    width: '50%',
    height: '100%',
    backgroundColor: 'green',
  },
  half: {
    width: '50%',
    padding: 25,
    backgroundColor: '#164194',
  },
  categorieText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  categorieName: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  subCategorie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subCategorieText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  input: {},
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
    fontSize: 22,
    marginBottom: 10,
    marginTop: 30,
    color: '#164194',
  },
  rsText: {
    color: '#164194',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
})

export default Home
