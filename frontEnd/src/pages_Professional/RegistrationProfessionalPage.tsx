import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const RegistrationProfessionalPage: React.FC = (props: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [locationTag, setLocationTag] = useState("");
  const [address, setAddress] = useState("");
  const [nid, setNid] = useState("");
  const [expertise, setExpertise] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    // Change if Photos app permission not given
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorCode);
      } else {
        setProfileImage(response.uri);
      }
    });
  };

  const handleProfessionalRegistration = async () => {
    // Implement logic for professional registration
    if (firstName === "") {
      Alert.alert(
        "First Name not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry First Name") }],
        { cancelable: false }
      );
      return;
    }
    if (lastName === "") {
      Alert.alert(
        "Last Name not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry Last Name") }],
        { cancelable: false }
      );
      return;
    }
    if (email === "") {
      Alert.alert(
        "Email not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry Email") }],
        { cancelable: false }
      );
      return;
    }
    if (phone === "") {
      Alert.alert(
        "Phone not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry Phone") }],
        { cancelable: false }
      );
      return;
    }
    if (nid === "") {
      Alert.alert(
        "NID not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry NID") }],
        { cancelable: false }
      );
      return;
    }
    if (expertise === "") {
      Alert.alert(
        "expertise not provided",
        "Registration not successful. Please retry.",
        [{ text: "Retry", onPress: () => console.log("Retry Expertise") }],
        { cancelable: false }
      );
      return;
    }
    if (password === confirmPassword) {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        role: 2,
        phone: phone,
        location_tag: locationTag,
        address: address,
        nid: nid,
        expertise: expertise,
        description: description,
        image_path: profileImage,
      };
      try {
        const response = await axios.post(
          "http://10.10.243.85:3000/user/regUser",
          userData
        );
        // console.log(response.data);
        // Assuming your backend sends a boolean indicating success
        if (response.data == true) {
          console.log("User registered successfully");
          Alert.alert(
            "Success",
            "Successfully registered!",
            [
              {
                text: "OK",
                onPress: () => props.navigation.navigate("GetStartedPage"), // Navigate to the Login Page
              },
            ],
            { cancelable: false }
          );
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        Alert.alert(
          `Registation failed due to ${error.message}`,
          "Do you want to retry?",
          [
            {
              text: "Retry",
              onPress: () => console.log("Retry Registration..."),
            },
          ],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        `Password Doesn't match`,
        "",
        [{ text: "Retry", onPress: () => console.log("Retry Password") }],
        { cancelable: false }
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Register as Professional</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Location Tag"
            value={locationTag}
            onChangeText={(text) => setLocationTag(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="NID"
            value={nid}
            onChangeText={(text) => setNid(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Expertise (e.g., Plumbing, Electrical)"
            value={expertise}
            onChangeText={(text) => setExpertise(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            multiline
            numberOfLines={4}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
          />

          {/* Image Upload Field */}
          <TouchableOpacity
            style={styles.imageUploadButton}
            onPress={handleImageUpload}
          >
            <Text style={styles.imageUploadButtonText}>
              Upload Profile Image
            </Text>
          </TouchableOpacity>
          {profileImage && (
            <Image source={{ uri: profileImage }} style={styles.imagePreview} />
          )}

          {/* Registration Button */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleProfessionalRegistration}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  imageUploadButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  imageUploadButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 8,
  },
  registerButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegistrationProfessionalPage;
