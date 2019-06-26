import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'

const InqueriesInfos = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.headerPassedButton}
            onPress={() => navigation.navigate('Recap')}
          >
            <Text style={styles.headerActivNumber}>1</Text>
          </TouchableOpacity>
          <Text style={styles.headerInactivText}>Votre commande</Text>
        </View>
        <View style={styles.headerLine} />
        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.headerActivButton}
            onPress={() => navigation.navigate('InqueriesInfos')}
          >
            <Text style={styles.headerActivNumber}>2</Text>
          </TouchableOpacity>
          <Text style={styles.headerActivText}>Votre information</Text>
        </View>
        <View style={styles.headerLine} />
        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.headerInactivButton}
            onPress={() => navigation.navigate('Paiement')}
          >
            <Text style={styles.headerInactivNumber}>3</Text>
          </TouchableOpacity>
          <Text style={styles.headerInactivText}>Paiement sécurisé</Text>
        </View>
      </View>
      <View style={styles.line} />
      <Text style={styles.title}>Informations client</Text>
      <View>
        <View>
          <View style={styles.blockContainer}>
            <View style={styles.blockHeader}>
              <Text style={styles.blockTitle}>Adresse de livraison</Text>
            </View>
            <Text style={styles.boldText}>Le fumoir de la régence</Text>
            <Text style={styles.currentText}>73 Cours Albret</Text>
            <Text style={styles.currentText}>33000 Bordeaux</Text>
            <TouchableOpacity style={styles.addressModify}>
              <Text style={styles.modifyText}>Modifier ></Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.blockHeader}>
              <Text style={styles.blockTitle}>Adresse de facturation</Text>
            </View>
            <Text style={styles.boldText}>Le fumoir de la régence</Text>
            <Text style={styles.currentText}>73 Cours Albret</Text>
            <Text style={styles.currentText}>33000 Bordeaux</Text>
            <TouchableOpacity style={styles.addressModify}>
              <Text style={styles.modifyText}>Modifier ></Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>
                + Ajouter une adresse de facturation
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Paiement')}
        >
          <Text style={styles.nextText}>Finaliser la commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
)

InqueriesInfos.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

const styles = StyleSheet.create({
  blockContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
  },
  blockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  blockTitle: {
    color: '#164194',
    fontSize: 22,
    fontWeight: '200',
  },
  title: {
    fontSize: 32,
    marginTop: 10,
    color: '#164194',
    fontWeight: '200',
  },
  container: {
    padding: 15,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  headerItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerActivButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    backgroundColor: '#0364D9',
    borderRadius: 8,
  },
  headerActivNumber: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  headerActivText: {
    marginVertical: 5,
    color: '#0364D9',
    fontSize: 12,
  },
  headerInactivButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 8,
  },
  headerPassedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 35,
    backgroundColor: '#164194',
    borderRadius: 8,
  },
  headerInactivNumber: {
    fontSize: 14,
    color: '#707070',
  },
  headerInactivText: {
    marginVertical: 5,
    color: '#707070',
    fontSize: 12,
  },
  headerLine: {
    width: 10,
    height: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
    marginTop: 17,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  boldText: {
    color: '#242A48',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
  },
  currentText: {
    color: '#242A48',
    fontSize: 16,
  },
  modifyText: {
    marginVertical: 10,
    color: '#164194',
    fontWeight: '700',
    fontSize: 16,
  },
  addButton: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#164194',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  addText: {
    color: '#164194',
    fontSize: 15,
  },
  nextButton: {
    width: '100%',
    backgroundColor: '#164194',
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  nextText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
})

export default InqueriesInfos
