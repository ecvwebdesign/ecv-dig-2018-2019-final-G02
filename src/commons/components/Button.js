import React from 'react'
import PropTypes from 'prop-types'
import {
  View, TouchableOpacity, StyleSheet, Text,
} from 'react-native'
// import CustomText from './CustomText'
import theme from '../../themes/default'

const Button = ({
  onPress, label, style, styleLabel,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ ...styles.button, ...style }}>
      <Text style={{ ...styles.label, ...styleLabel }}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  styleLabel: PropTypes.shape(),
}
Button.defaultProps = {
  style: {},
  styleLabel: {},
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    fontSize: theme.button.fontSize,
  },
})

export default Button
