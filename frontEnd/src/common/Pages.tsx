import React from "react";
import { Button, Text, View } from "react-native";

const Pages = (props: any) => {
  const navHandler = () => {
    props.navigation.navigate("LandingPage");
  };
  const navGetStarted = () => {
    props.navigation.navigate("GetStartedPage");
  };

  return (
    <View>
      <View>
        <Button title="Landing Page" onPress={navHandler} />
        <Button title="Get Started Page" onPress={navGetStarted} />
      </View>
    </View>
  );
};

export default Pages;
