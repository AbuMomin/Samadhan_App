import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const ProProfilePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.fullName}>John Doe</Text>
        <Text style={styles.contactNumber}>Contact: +123456789</Text>
        <Text style={styles.locationTag}>Location: Home</Text>
        <Text style={styles.fullAddress}>123 Main Street, City</Text>
      </View>

      <View style={styles.expertiseCard}>
        <Text style={styles.expertiseTitle}>Expertises</Text>
        <View style={styles.expertiseItem}>
          <Text style={styles.expertiseText}>Electronics Repair</Text>
        </View>
        <View style={styles.expertiseItem}>
          <Text style={styles.expertiseText}>Electrician</Text>
        </View>
        {/* Add more expertise items as needed */}
      </View>

      <Text style={styles.description}>
        Passionate about providing top-notch service!
      </Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: 4.8</Text>
        <Text style={styles.jobsDone}>Jobs Done: 50+</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  contactNumber: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  locationTag: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  fullAddress: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  expertiseCard: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  expertiseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  expertiseItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  expertiseText: {
    fontSize: 16,
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: "#555",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  jobsDone: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default ProProfilePage;
