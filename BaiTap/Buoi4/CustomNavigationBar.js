import { View, Text } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";

const CustomNavigationBar = ({ navigation, route, options, back }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
  {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
  {!back ? (
    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
  ) : null}
  <Appbar.Content title={title} />
  {!back ? (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Appbar.Action icon="dots-vertical" onPress={openMenu} />
      }>
      <Menu.Item onPress={() => navigation.navigate("Home")} title="Home" />
      <Menu.Item onPress={() => navigation.navigate("Detail")} title="Detail" />
      <Menu.Item title="Option 3" disabled />
    </Menu>
  ) : null}
</Appbar.Header>

  );
};

export default CustomNavigationBar;
