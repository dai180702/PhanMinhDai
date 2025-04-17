import React from "react";
import Buoi1 from "./BaiTap/Buoi1";
import Buoi2 from "./BaiTap/Buoi2";
import Home from "./BaiTap/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Buoi3 from "./BaiTap/Buoi3";
import { Register } from "./BaiTap/Register";
import { ForgotPassword } from "./BaiTap/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen name="buoi1" component={Buoi1} />
        <Stack.Screen name="buoi2" component={Buoi2} />
        <Stack.Screen name="buoi3" component={Buoi3} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="forgot" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
