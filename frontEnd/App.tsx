import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ClientHomePage from "./src/pages_Client/HomeClientPage";
import ReviewClientPage from "./src/pages_Client/ReviewClient";
import Icon from "react-native-vector-icons/FontAwesome";
import PagesScreen from "./src/common/Pages";
import LandingPage from "./src/common/LandingPage";
import GetStartedPage from "./src/common/GetStartedPage";
import NotificationPage from "./src/common/Notification";
import RecentChatsPage from "./src/common/RecentChatsPage";
import ChattingPage from "./src/common/ChattingPage";
import AccountPage from "./src/common/AccountPage";
import ProfileSettingsPage from "./src/dump/ProfileSettingsPage";
import HistoryPage from "./src/pages_Client/HistoryPage";
// import JobPostingPage from "./src/pages_Client/JobPostingPage";
import RegistrationProfessionalPage from "./src/pages_Professional/RegistrationProfessionalPage";
import RegistrationUserPage from "./src/pages_Client/RegistrationUserPage";
import LoginPage from "./src/common/LoginPage";
import ProProfilePage from "./src/pages_Professional/ProProfilePage";

const stack = createStackNavigator();

const TempReviewScreen = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="TempReview" component={ReviewClientPage} />
      <stack.Screen name="Pages" component={PagesScreen} />
      <stack.Screen name="LandingPage" component={LandingPage} />
      <stack.Screen name="GetStartedPage" component={GetStartedPage} />
      <stack.Screen
        name="RegistrationProfessionalPage"
        component={RegistrationProfessionalPage}
      />
      <stack.Screen
        name="RegistrationUserPage"
        component={RegistrationUserPage}
      />
      <stack.Screen name="LoginPage" component={LoginPage} />
    </stack.Navigator>
  );
};

const ChatsStack = () => (
  <stack.Navigator>
    <stack.Screen name="RecentChats" component={RecentChatsPage} />
    <stack.Screen name="Chatting" component={ChattingPage} />
  </stack.Navigator>
);

const AccountStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Account" component={AccountPage} />
      <stack.Screen name="ProfileSettings" component={ProfileSettingsPage} />
      <stack.Screen name="History" component={HistoryPage} />
      {/* <stack.Screen name="LearnMoreSamadhan" component={LearnAboutSamadhanPage} /> */}
    </stack.Navigator>
  );
};

const ClientHomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="MainHome" component={ClientHomePage} />
      <stack.Screen name="ProProfilePage" component={ProProfilePage} />
    </stack.Navigator>
  );
};

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
        <Tab.Screen name="Home" component={ClientHomeStack} />
        <Tab.Screen name="Notification" component={NotificationPage} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
