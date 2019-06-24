import React from 'react'
import PropTypes from 'prop-types'
import { Image, ViewPropTypes } from 'react-native'
import resolveAssetSource from 'resolveAssetSource'

class NDImage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      originalDimensions: null,
    }
  }

  async componentDidMount() {
    const { source } = this.props

    // Get original dimensions.
    const originalDimensions = {}
    if (source instanceof Object && typeof source.uri === 'string') {
      // Remote image.
      await Image.getSize(
        source.uri,
        (originalWidth, originalHeight) => {
          originalDimensions.width = originalWidth
          originalDimensions.height = originalHeight
          this.setState({ originalDimensions })
        },
        () => {
          console.warn('Failed to get size of remote image', source.uri)
        }
      )
    } else {
      // Local image imported via require.
      const localImage = resolveAssetSource(source)
      originalDimensions.width = localImage.width
      originalDimensions.height = localImage.height
      this.setState({ originalDimensions })
    }
  }

  render() {
    const {
      source, width, height, style, ...otherProps
    } = this.props
    const { originalDimensions } = this.state

    // Resize image as requested by user.
    const resizedDimensions = {
      width: 0,
      height: 0,
    }

    if (originalDimensions) {
      if (width && height) {
        // Don't preserve ratio.
        resizedDimensions.width = width
        resizedDimensions.height = height
      } else if (width) {
        // Preserve ratio based on width.
        const ratio = width / originalDimensions.width
        resizedDimensions.width = width
        resizedDimensions.height = originalDimensions.height * ratio
      } else if (height) {
        // Preserve ratio based on height.
        const ratio = height / originalDimensions.height
        resizedDimensions.height = height
        resizedDimensions.width = originalDimensions.width * ratio
      }
    }

    return (
      <Image
        source={source}
        style={{ ...resizedDimensions, ...style }}
        {...otherProps}
      />
    )
  }
}
NDImage.propTypes = {
  source: PropTypes.oneOfType([PropTypes.node, PropTypes.shape()]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: ViewPropTypes.style,
}
NDImage.defaultProps = {
  width: 0,
  height: 0,
  style: {},
}

export default NDImage
