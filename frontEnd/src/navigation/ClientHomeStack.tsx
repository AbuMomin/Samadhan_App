import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ClientHomePage from "../pages_Client/HomeClientPage";
import ProProfilePage from "../pages_Professional/ProProfilePage";

const stack = createStackNavigator();

const ClientHomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="MainHome" component={ClientHomePage} />
      <stack.Screen name="ProProfilePage" component={ProProfilePage} />
    </stack.Navigator>
  );
};

export default ClientHomeStack;
