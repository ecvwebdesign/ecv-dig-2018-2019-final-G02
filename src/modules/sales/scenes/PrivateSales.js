import React from 'react'
import {
  StyleSheet, View, ScrollView, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel'
import SliderComponent from '../components/SliderComponent'

const ENTRIES1 = [
  {
    path: "require('../../../commons/assets/images/slide1.jpg')",
  },
  {
    path: "require('../../../commons/assets/images/slide1.jpg')",
  },
  {
    path: "require('../../../commons/assets/images/slide1.jpg')",
  },
]

const PrivateSales = ({ navigation }) => (
  <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      marginTop: 50,
      marginLeft: 40,
    }}
  >
    <Carousel
      data={ENTRIES1}
      renderItem={SliderComponent}
      sliderWidth={280}
      itemWidth={280}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      layout="tinder"
      loop={false}
    />
  </View>
)

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
