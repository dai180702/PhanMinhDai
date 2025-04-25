import { View, Text } from "react-native";
import React from "react";
import Profile from "./Profile";
import Detail from "./Detail";
import Lab4 from "./Lab4";
import CustomDrawerBar from "./CustomDrawerBar";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerBar {...props} />}>
      <Drawer.Screen name="Home" component={Lab4} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Detail" component={Detail} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
