import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Lab4 = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text>Home Screen</Text>
     <Button mode="contained" onPress={() => navigation.navigate("detail")} title="Details" />
    </View>
  )
}

export default Lab4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});