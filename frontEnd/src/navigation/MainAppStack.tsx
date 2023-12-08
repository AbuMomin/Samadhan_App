import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import NotificationPage from "../dump/Notification";
import ChatsStack from "./ChatStack";
import ClientHomeStack from "./ClientHomeStack";
import AccountStack from "./AccountStack";
import ReviewClientPage from "../dump/ReviewClient";
import { useAuth } from "../providers/AuthProvider";
const Tab = createBottomTabNavigator();

const MainAppStack = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Review") {
            iconName = "star";
          } else if (route.name === "Chat") {
            iconName = "comments";
          } else if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Notification") {
            iconName = "bell";
          } else if (route.name === "Account") {
            iconName = "user";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Review" component={ReviewClientPage} />
      <Tab.Screen name="Chat" component={ChatsStack} />
      <Tab.Screen name="Home" component={ClientHomeStack} />
      <Tab.Screen name="Notification" component={NotificationPage} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default MainAppStack;
