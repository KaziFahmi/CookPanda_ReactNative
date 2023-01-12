import React from 'react'
import { Image, View } from 'react-native'
import styles from "./Logo.style"
import Header from "../Header/Header"

export default function Logo() {
  return (
    <View>
      <Image source={require('../../../assets/logo.png')} style={styles.image} />
      <Header>Cook Panda</Header>
    </View>
  ) 
}
