import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
}

const ChattingPage: React.FC = () => {
  const chatMessages: ChatMessage[] = [
    { id: 1, sender: "Kalam Bhuiyan", message: "Hello, how can I help you?" },
    { id: 2, sender: "You", message: "I need plumbing service for my home." },
    // Add more chat messages as needed
  ];

  return (
    <ScrollView>
      {/* Top Pane */}
      <View
        style={{
          backgroundColor: "#333",
          marginBottom: 16,
          padding: 16,
          borderRadius: 8,
        }}
      >
        {/* Top Pane Content */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/plumber.jpg")}
            style={{ width: 50, height: 50, borderRadius: 8 }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Plumbing Service
            </Text>
            <Text style={{ color: "#fff" }}>Chatting with Afrin Chadni</Text>
          </View>
        </View>
        {/* Buttons */}
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Button
              title="Job Amount Set"
              buttonStyle={{ backgroundColor: "#00bcd4" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Button
              title="Schedule Arrival Time"
              buttonStyle={{ backgroundColor: "#4caf50" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Messages */}
      {chatMessages.map((message) => (
        <View key={message.id} style={{ flexDirection: "row", margin: 16 }}>
          <Image
            source={require("../../assets/person.png")}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#e0e0e0",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text>{message.sender}</Text>
            <Text>{message.message}</Text>
          </View>
        </View>
      ))}

      {/* Amount Set Box */}
      <View
        style={{
          backgroundColor: "#e0e0e0",
          margin: 16,
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Text>You set the Job Amount : 1000 BDT</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Button
              title="Accept"
              buttonStyle={{ backgroundColor: "#4caf50" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Button
              title="Re-Offer"
              buttonStyle={{ backgroundColor: "#ff5722" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChattingPage;
