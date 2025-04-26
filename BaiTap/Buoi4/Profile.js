import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge" style={styles.text}>Phan Minh Đại</Text>
    </View>
  );
};

export default Profile;

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
