import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountPage from "../dump/AccountPage";
import ProfileSettingsPage from "../dump/ProfileSettingsPage";
import HistoryPage from "../dump/HistoryPage";

const stack = createStackNavigator();

const AccountStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Account" component={AccountPage} />
      <stack.Screen name="ProfileSettings" component={ProfileSettingsPage} />
      <stack.Screen name="History" component={HistoryPage} />
    </stack.Navigator>
  );
};

export default AccountPage;
