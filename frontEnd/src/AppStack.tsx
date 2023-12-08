import React, { useState } from "react";
import { useAuth } from "./providers/AuthProvider";
import MainAppStack from "./navigation/MainAppStack";
import { createStackNavigator } from "@react-navigation/stack";
import LandingStack from "./navigation/LandingStack";

const stack = createStackNavigator();
const AppStack = () => {
  const { isLoggedIn } = useAuth();
  //   let [loggedIn, setIsLoggedIn] = useState(isLoggedIn);

  //   function login() {
  //     loggedIn = useAuth().isLoggedIn;
  //   }
  if (isLoggedIn) return <MainAppStack />;
  else return <LandingStack />;
  //   login={login}
};

export default AppStack;
