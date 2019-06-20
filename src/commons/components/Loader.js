import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, View } from 'react-native'
import theme from '../../themes/default'

const Loader = ({
  size, enabled, style, color,
}) => (
  <View style={style}>
    <ActivityIndicator animating={enabled} size={size} color={color} />
  </View>
)

Loader.propTypes = {
  size: PropTypes.string,
  enabled: PropTypes.bool,
  style: PropTypes.shape(),
  color: PropTypes.string,
}
Loader.defaultProps = {
  size: 'small',
  enabled: true,
  style: null,
  color: theme.loader.color,
}

export default Loader
