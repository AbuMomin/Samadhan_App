import React from "react";
import { Button, Text, View } from "react-native";

const Pages = (props: any) => {
  const navHandler = () => {
    props.navigation.navigate("LandingPage");
  };
  return (
    <View>
      <View>
        <Button title="Landing Page" onPress={navHandler} />
      </View>
    </View>
  );
};

export default Pages;
