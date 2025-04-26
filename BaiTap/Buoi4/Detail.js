import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  }
});