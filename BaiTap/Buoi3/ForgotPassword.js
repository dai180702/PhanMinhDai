import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} style={styles.inputIcon} />
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate}
      >
        <Text style={styles.buttonText}>Send reset Email</Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate("buoi3");
        }}
        style={styles.linkText}
      >
        login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
  },
  inputIcon: {
    marginRight: 10,
    color: "#888",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#ff6f00",
    borderRadius: 8,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  linkText: {
    textAlign: "center",
    color: "blue",
    fontSize: 18,
  },
});
