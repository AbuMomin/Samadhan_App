// RecentChatsPage.tsx

import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

interface RecentChat {
  id: number;
  jobTitle: string;
  personName: string;
  newMessages: number;
  image: any; // Replace 'any' with the correct type for your image
}

const RecentChatsPage: React.FC = (props: any) => {
  const navigation = useNavigation();

  const handleChatPress = (chatId: number) => {
    // Navigate to the ChattingPage with the selected chatId
    props.navigation.navigate("Chatting", { chatId });
  };

  const recentChats: RecentChat[] = [
    {
      id: 1,
      jobTitle: "Plumbing Service",
      personName: "Kamal Buiyan",
      newMessages: 2,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 2,
      jobTitle: "Electronics Service",
      personName: "Jamal Chowdhury",
      newMessages: 5,
      image: require("../../assets/electronics.png"),
    },
    // Add more recent chat objects as needed
  ];

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 16 }}>
        Chat Box
      </Text>
      {recentChats.map((chat) => (
        <TouchableOpacity
          key={chat.id}
          onPress={() => handleChatPress(chat.id)}
          style={{
            marginBottom: 16,
            padding: 16,
            backgroundColor: "#fff",
            borderRadius: 8,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={chat.image}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{chat.jobTitle}</Text>
              <Text>{chat.personName}</Text>
            </View>
            {chat.newMessages > 0 && (
              <Badge value={chat.newMessages} status="error" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RecentChatsPage;
