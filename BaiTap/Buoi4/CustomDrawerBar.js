import { View, Text } from "react-native";
import React, { useState } from "react";
import { Divider, Drawer } from "react-native-paper";

const CustomDrawerBar = ({ navigation }) => {
  const [active, setActive] = useState("");

  return (
    <Drawer.Section title="Admin">
      <Drawer.Item
        label="Home"
        icon={"home"}
        active={active === "Home"}
        onPress={() => {
          setActive("Home");
          navigation.navigate("Home");
        }}
      />
      <Drawer.Item
        label="Details"
        icon={"account"}
        active={active === "Details"}
        onPress={() => {
          setActive("Details");
          navigation.navigate("Details");
        }}
      />
    </Drawer.Section>
  );
};

export default CustomDrawerBar;
