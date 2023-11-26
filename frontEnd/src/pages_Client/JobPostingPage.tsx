import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TagInput from "react-native-tag-input";
import { Picker } from "@react-native-picker/picker";

const JobPostingPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobImage, setJobImage] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [locationTags, setLocationTags] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");

  const handlePostJob = () => {
    // Implement logic to post the job
    // You can send the data to your backend or perform any required action
    console.log({
      jobTitle,
      jobImage,
      jobDescription,
      fullAddress,
      locationTags,
      urgency,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post a Job</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />

      {/* Add image input component */}

      <TextInput
        style={styles.input}
        placeholder="Job Description"
        multiline
        numberOfLines={4}
        value={jobDescription}
        onChangeText={(text) => setJobDescription(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Full Address"
        value={fullAddress}
        onChangeText={(text) => setFullAddress(text)}
      />

      <View style={styles.tagsContainer}>
        <Text>Location Tags:</Text>
        <TagInput
          value={locationTags}
          onChange={(tags) => setLocationTags(tags)}
        />
      </View>

      <Picker
        selectedValue={urgency}
        onValueChange={(itemValue) => setUrgency(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Within 24 hours" value="24h" />
        <Picker.Item label="Within 48 hours" value="48h" />
        <Picker.Item label="Within 7 days" value="7d" />
      </Picker>

      <TouchableOpacity style={styles.postButton} onPress={handlePostJob}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
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
  tagsContainer: {
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default JobPostingPage;
