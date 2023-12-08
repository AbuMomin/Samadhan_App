import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const AccountPage: React.FC = (props: any) => {
  //   const navigation = useNavigation();

  const navigateToProfileSettings = () => {
    props.navigation.navigate("ProfileSettings");
  };

  const navigateToHistory = () => {
    props.navigation.navigate("History");
  };

  const navigateToLearnAboutSamadhan = () => {
    props.navigation.navigate("LearnAboutSamadhan");
  };

  const handleLogout = () => {
    // Perform logout logic HERE
    // For example, clear user authentication state, tokens, etc.
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToProfileSettings}
      >
        <Text style={styles.buttonText}>Profile Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToHistory}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToLearnAboutSamadhan}
      >
        <Text style={styles.buttonText}>Learn About Samadhan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
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
  button: {
    width: "80%",
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "red",
  },
  logoutText: {
    color: "#fff",
  },
});

export default AccountPage;
