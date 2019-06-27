import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

const SliderComponent = ({ navigation, item, index }) => (
  <View>
    <TouchableOpacity>
      <View>
        {index === 0 && (
          <Image
            style={{ width: 203, height: 350 }}
            source={require('../../../commons/assets/images/slide1.jpg')}
          />
        )}
        {index === 1 && (
          <Image
            style={{ width: 203, height: 350 }}
            source={require('../../../commons/assets/images/slide2.jpg')}
          />
        )}
        {index === 2 && (
          <Image
            style={{ width: 203, height: 350 }}
            source={require('../../../commons/assets/images/slide3.jpg')}
          />
        )}
      </View>
    </TouchableOpacity>
  </View>
)

SliderComponent.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.shape).isRequired,
}

export default SliderComponent
