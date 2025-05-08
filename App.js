import React from "react";
import Home from "./BaiTap/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./BaiTap/Buoi3/Register";
import { ForgotPassword } from "./BaiTap/Buoi3/ForgotPassword";
import Lab1 from "./BaiTap/Buoi1/Lab1";
import Lab2 from "./BaiTap/Buoi2/Lab2";
import Lab3 from "./BaiTap/Buoi3/Lab3";
import Detail from "./BaiTap/Buoi4/Detail";
import { Provider as PaperProvider } from "react-native-paper";
import DrawerNavigator from "./BaiTap/Buoi4/DrawerNavigator";
import Login from "./BaiTap/Buoi5/Login";
import RegisterBuoi5 from "./BaiTap/Buoi5/RegisterBuoi5";
import TodoScreen from "./BaiTap/Buoi5/TodoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen name="buoi1" component={Buoi1Navigation} />
          <Stack.Screen name="buoi2" component={Buoi2Navigation} />
          <Stack.Screen name="buoi3" component={Buoi3Navigation} />
          <Stack.Screen name="buoi4" component={Buoi4Navigation} />
          <Stack.Screen name="buoi5" component={Buoi5Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const Buoi1Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Lab1"
        component={Lab1}
        options={{ title: "Bài tập buổi 1" }}
      />
    </Stack.Navigator>
  );
};

const Buoi2Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Lab2"
        component={Lab2}
        options={{ title: "Bài tập buổi 2" }}
      />
    </Stack.Navigator>
  );
};

const Buoi3Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Lab3"
        component={Lab3}
        options={{ title: "Bài tập buổi 3" }}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgot" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const Buoi4Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lab4" component={DrawerNavigator} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
};

const Buoi5Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Register" component={RegisterBuoi5} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
    </Stack.Navigator>
  );
};
