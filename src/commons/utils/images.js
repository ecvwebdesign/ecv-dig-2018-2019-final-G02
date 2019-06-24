import { Dimensions } from 'react-native'

const getImageSize = (ratio, screenPadding) => {
  const widthOnDevice = Dimensions.get('window').width

  const imageWidth = widthOnDevice - screenPadding * 2
  const imageHeight = imageWidth * ratio
  return {
    height: imageHeight,
    width: imageWidth,
  }
}

export default getImageSize
