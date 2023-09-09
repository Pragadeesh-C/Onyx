import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IngredientsImageProps{
    imageUrl:ImageSourcePropType
}

const IngredientsImage = ({imageUrl}:IngredientsImageProps) => {
  return (
        <View style={styles.ingredientsImageView}>
          <Image
            source={imageUrl}
            style={styles.ingredientsImage}
          />
        </View>
  )
}

export default IngredientsImage

const styles = StyleSheet.create({
      ingredientsImageView: {
        height: 90,
        width: 90,
        backgroundColor: 'silver',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      ingredientsImage: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
      },
})