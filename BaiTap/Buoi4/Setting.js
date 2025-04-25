import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Profile Screen</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
