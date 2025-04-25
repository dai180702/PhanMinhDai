import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <View style={styles.body}>
        <Text style={styles.Text}>
          I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          style={[styles.button, !isHungry && styles.buttonDisabled]}
        >
          <Text style={styles.buttonText}>
            {isHungry ? "Pour me some milk, please!" : "Thank you!"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Lab1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Text}> Bài tập Buổi 1</Text>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
        <Cat name="Vera" />
      </View>
    </>
  );
};

export default Lab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  body: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
  },

  Text: {
    //backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#CD853F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonDisabled: {
    backgroundColor: "#97FFFF",
  },

  buttonText: {
    color: "black",
    fontSize: 20,
  },
});
