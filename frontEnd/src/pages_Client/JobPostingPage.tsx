import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const JobPostingPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobImage, setJobImage] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [locationTags, setLocationTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
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

  const addTag = () => {
    if (currentTag.trim() !== "") {
      setLocationTags([...locationTags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...locationTags];
    newTags.splice(index, 1);
    setLocationTags(newTags);
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
        <View style={styles.tagInputContainer}>
          {locationTags.map((tag, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => removeTag(index)}
              style={styles.tag}
            >
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            style={styles.tagInput}
            placeholder="Add Location"
            value={currentTag}
            onChangeText={(text) => setCurrentTag(text)}
            onBlur={addTag}
            onSubmitEditing={addTag}
          />
        </View>
      </View>

      <Picker
        selectedValue={urgency}
        onValueChange={(itemValue) => setUrgency(itemValue)}
        // style={styles.picker}
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
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  tagsContainer: {
    marginBottom: 16,
  },
  tagInputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    padding: 8,
    margin: 4,
  },
  tagText: {
    color: "#333",
  },
  tagInput: {
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    margin: 4,
    flex: 1,
  },
  // picker: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   marginBottom: 16,
  // },
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
