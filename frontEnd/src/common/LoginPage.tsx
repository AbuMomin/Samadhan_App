import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

const LoginPage: React.FC = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Implement logic for user login
    if (email === "" || password === "") {
      Alert.alert(
        "Email and Password field can not be Empty",
        "Please provide Email and password",
        [{ text: "Retry", onPress: () => console.log("Retry Login Input") }],
        { cancelable: false }
      );
      return;
    } else {
      const loginData = {
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          "http://192.168.0.106:3000/user/login",
          loginData
        );
        // console.log(response.data);
        // Assuming your backend sends a boolean indicating success
        if (
          typeof response.data.userID === "number" &&
          response.data.userID > 0
        ) {
          console.log("User successfully Logged In");
          Alert.alert(
            "Login Successful",
            `Welcome! User: ${response.data.userID}`,
            [
              {
                text: "OK",
              },
            ],
            { cancelable: false }
          );
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        Alert.alert(
          `Login Failed !`,
          "Email or Password is incorrect!",
          [
            {
              text: "Retry",
              onPress: () => console.log("Retry Login..."),
            },
          ],
          { cancelable: false }
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Welcome Back!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#3498db",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: "#3498db",
    padding: 12,
    width: "40%",
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 16,
    color: "#3498db",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
