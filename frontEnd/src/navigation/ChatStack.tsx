import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecentChatsPage from "../common/RecentChatsPage";
import ChattingPage from "../common/ChattingPage";

const stack = createStackNavigator();

const ChatsStack = () => (
  <stack.Navigator>
    <stack.Screen name="RecentChats" component={RecentChatsPage} />
    <stack.Screen name="Chatting" component={ChattingPage} />
  </stack.Navigator>
);

export default ChatsStack;
