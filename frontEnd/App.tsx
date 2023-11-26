import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ClientHomePage from "./src/pages_Client/HomeClientPage";
import ReviewClientPage from "./src/pages_Client/ReviewClient";
import AccountClientPage from "./src/pages_Client/AccountClient";
import ChatClientPage from "./src/pages_Client/ChatClient";
import Icon from "react-native-vector-icons/FontAwesome";
import PagesScreen from "./src/common/Pages";
import LandingPage from "./src/common/LandingPage";
import GetStartedPage from "./src/common/GetStartedPage";
import NotificationPage from "./src/common/Notification";
import RecentChatsPage from "./src/common/RecentChatsPage";
import ChattingPage from "./src/common/ChattingPage";

const stack = createStackNavigator();
const TempReviewScreen = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="TempReview" component={ReviewClientPage} />
      <stack.Screen name="Pages" component={PagesScreen} />
      <stack.Screen name="LandingPage" component={LandingPage} />
      <stack.Screen name="GetStartedPage" component={GetStartedPage} />
    </stack.Navigator>
  );
};

const ChatsStack = () => (
  <stack.Navigator>
    <stack.Screen name="RecentChats" component={RecentChatsPage} />
    <stack.Screen name="Chatting" component={ChattingPage} />
  </stack.Navigator>
);

const Tab = createBottomTabNavigator();
const App = (props: any) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen name="Review" component={TempReviewScreen} />
        <Tab.Screen name="Chat" component={ChatsStack} />
        <Tab.Screen name="Home" component={ClientHomePage} />
        <Tab.Screen name="Notification" component={NotificationPage} />
        <Tab.Screen name="Account" component={AccountClientPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
