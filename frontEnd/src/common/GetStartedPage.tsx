import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const GetStartedPage = (props: any) => {
  const navRegPro = () => {
    props.navigation.navigate("RegistrationProfessionalPage");
  };
  const navRegUser = () => {
    props.navigation.navigate("RegistrationUserPage");
  };
  const navLogin = () => {
    props.navigation.navigate("LoginPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.appName}> Samadhan</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.getStartedText}> Get Started !!!</Text>
        <Text style={styles.title}>
          Sign-in, or Register, to get started your journey with Samadhan App.
        </Text>

        <TouchableOpacity style={styles.loginBtn} onPress={navLogin}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={navRegUser}>
          <Text style={styles.registerButtonText}>Register as USER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={navRegPro}>
          <Text style={styles.registerButtonText}>
            Register as Professional
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    flexGrow: 1,
    // justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    flexGrow: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    marginRight: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  getStartedText: {
    fontSize: 50,
    fontWeight: "bold",
    padding: 10,
    color: "green",
  },
  loginBtn: {
    backgroundColor: "#3498db",
    paddingVertical: 19,
    paddingHorizontal: 54,
    borderRadius: 8,
    marginBottom: 16,
  },
  loginbuttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#27ae60",
    paddingVertical: 12,
    paddingHorizontal: 44,
    borderRadius: 8,
    margin: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GetStartedPage;
