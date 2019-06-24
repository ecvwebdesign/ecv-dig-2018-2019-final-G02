import React from 'react'
import {
  StyleSheet, Linking, View, Text,
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

const MarketScanner = () => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) => console.error('An error occured', err))
  }

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        cameraStyle={styles.cameraContainer}
        showMarker
        customMarker={(
          <View style={styles.markerContainer}>
            <Text style={styles.markerText}>Visez le QR Code</Text>
            <View style={styles.marker} />
          </View>
)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  cameraContainer: {
    height: '100%',
    width: '100%',
  },
  markerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 300,
    width: 250,
  },
  markerText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  marker: {
    height: 250,
    width: 250,
    borderColor: '#8b8b8b',
    borderWidth: 5,
    borderRadius: 12,
  },
})

export default MarketScanner
