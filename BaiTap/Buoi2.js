import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Buoi2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "Thông tin đăng nhập",
      `Username: ${username}\nPassword: ${password}`,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/hinh-anh-pokemon-61.jpg",
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://img.nieuwsblad.be/shtPKLqw_5byOTRM5Lh7IClNF7Q=/960x640/smart/https%3A%2F%2Fstatic.nieuwsblad.be%2FAssets%2FImages_Upload%2F2022%2F11%2F11%2Fc19200c2-b690-4ec3-9a3f-141fa808aa46.jpg",
          }}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          keyboardType="default"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Buoi2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },

  imgContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 350,
    height: 300,
  },

  container: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 18,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3498db",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
