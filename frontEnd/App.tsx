import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientHomePage from "./src/pages_Client/HomeClientPage";
import ReviewClientPage from "./src/pages_Client/ReviewClient";
import AccountClientPage from "./src/pages_Client/AccountClient";
import NotificationClientPage from "./src/pages_Client/NotificationClient";
import ChatClientPage from "./src/pages_Client/ChatClient";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Review" component={ReviewClientPage} />
        <Tab.Screen name="Chat" component={ChatClientPage} />
        <Tab.Screen name="Home" component={ClientHomePage} />
        <Tab.Screen name="Notification" component={NotificationClientPage} />
        <Tab.Screen name="Account" component={AccountClientPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
