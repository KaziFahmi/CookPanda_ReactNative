import React from 'react'
import { Image, View } from 'react-native'
import styles from "./Logo.style"
import { Text } from 'react-native-paper'

const Logo = function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.image} />
      <Text style={styles.header}> Cook Panda </Text>
    </View>
  ) 
}

export default Logo;