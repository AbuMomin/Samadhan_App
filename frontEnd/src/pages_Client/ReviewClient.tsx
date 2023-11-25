import React from "react";
import { Button, Text, View } from "react-native";

const ReviewClientPage = (props: any) => {
  const navHandler = () => {
    props.navigation.navigate("Pages");
  };
  return (
    <View>
      <Text>Hello To Review Page</Text>
      <View>
        <Button title="Other Essential Pages" onPress={navHandler} />
      </View>
    </View>
  );
};

export default ReviewClientPage;
