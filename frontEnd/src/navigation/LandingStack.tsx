import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../common/LoginPage";
import RegistrationUserPage from "../pages_Client/RegistrationUserPage";
import RegistrationProfessionalPage from "../pages_Professional/RegistrationProfessionalPage";
import GetStartedPage from "../common/GetStartedPage";
import LandingPage from "../common/LandingPage";

const stack = createStackNavigator();

const LandingStack = (props: any) => {
  // console.log(props);
  // const loginParam = props.login;

  return (
    <stack.Navigator>
      <stack.Screen name="LandingPage" component={LandingPage} />
      <stack.Screen name="GetStartedPage" component={GetStartedPage} />
      <stack.Screen
        name="RegistrationUserPage"
        component={RegistrationUserPage}
      />
      <stack.Screen
        name="RegistrationProfessionalPage"
        component={RegistrationProfessionalPage}
      />
      <stack.Screen
        name="LoginPage"
        component={LoginPage}
        // initialParams={loginParam}
      />
    </stack.Navigator>
  );
};

export default LandingStack;
