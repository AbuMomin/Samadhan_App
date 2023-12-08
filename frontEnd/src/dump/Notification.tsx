// NotificationPage.tsx

import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Badge } from "react-native-elements";

interface Notification {
  id: number;
  message: string;
  jobTitle: string;
  isNew: boolean;
  image: any; // Replace 'any' with the correct type for your image
}

const NotificationPage: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      message: "Alam Accepted your household Job. Click to Chat",
      jobTitle: "Plumbing Service",
      isNew: true,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 2,
      message: "Kalam scheduled your Job time. Click to View",
      jobTitle: "Electronics Repair Service",
      isNew: true,
      image: require("../../assets/electronics.png"),
    },
    {
      id: 3,
      message: "Alam Accepted your household Job. Click to Chat",
      jobTitle: "Plumbing Service",
      isNew: true,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 4,
      message: "Kalam scheduled your Job time. Click to View",
      jobTitle: "Electronics Repair Service",
      isNew: true,
      image: require("../../assets/electronics.png"),
    },
    {
      id: 5,
      message: "Alam Accepted your household Job. Click to Chat",
      jobTitle: "Plumbing Service",
      isNew: true,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 6,
      message: "Kalam scheduled your Job time. Click to View",
      jobTitle: "Electronics Repair Service",
      isNew: true,
      image: require("../../assets/electronics.png"),
    },
    {
      id: 7,
      message: "Alam Accepted your household Job. Click to Chat",
      jobTitle: "Plumbing Service",
      isNew: true,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 8,
      message: "Kalam scheduled your Job time. Click to View",
      jobTitle: "Electronics Repair Service",
      isNew: true,
      image: require("../../assets/electronics.png"),
    },
    {
      id: 9,
      message: "Alam Accepted your household Job. Click to Chat",
      jobTitle: "Plumbing Service",
      isNew: true,
      image: require("../../assets/plumber.jpg"),
    },
    {
      id: 10,
      message: "Kalam scheduled your Job time. Click to View",
      jobTitle: "Electronics Repair Service",
      isNew: true,
      image: require("../../assets/electronics.png"),
    },
    // Add more notification objects as needed
  ];

  return (
    <ScrollView>
      {notifications.map((notification) => (
        <View
          key={notification.id}
          style={{
            marginBottom: 7,
            padding: 14,
            backgroundColor: "#fff",
            borderRadius: 8,
            elevation: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={notification.image}
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
                borderRadius: 25,
              }}
            />
            <View>
              <Text>{notification.message}</Text>
              <Text style={{ fontWeight: "bold" }}>
                {notification.jobTitle}
              </Text>
            </View>
          </View>
          {notification.isNew && <Badge status="error" />}
        </View>
      ))}
    </ScrollView>
  );
};

export default NotificationPage;
