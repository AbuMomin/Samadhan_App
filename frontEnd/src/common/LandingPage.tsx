import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Samadhan Text */}
      <Text style={styles.appName}>Samadhan</Text>

      {/* Title */}
      <Text style={styles.title}>
        Connecting Local professionals to Household Service needs
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => {
          // Navigate to the next screen (Landing Page)
          navigation.navigate("LandingPage");
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Learn about Samadhan Button */}
      <TouchableOpacity
        style={styles.learnMoreButton}
        onPress={() => {
          // Implement the action for learning more about Samadhan
        }}
      >
        <Text style={styles.learnMoreButtonText}>Learn about Samadhan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  getStartedButton: {
    backgroundColor: "#3498db",
    paddingVertical: 19,
    paddingHorizontal: 94,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  learnMoreButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  learnMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LandingPage;
