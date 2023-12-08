import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProProfilePage: React.FC = (props: any) => {
  const { proUserData } = props.route.params;
  const expertises: string[] = proUserData.expertise.split(",");

  console.log(proUserData);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.fullName}>
          {proUserData.first_name} {proUserData.last_name}
        </Text>
        <Text style={styles.locationTag}>
          Location Tag: {proUserData.location_tag}
        </Text>
        <Text style={styles.fullAddress}>{proUserData.address}</Text>
      </View>

      {/* Chat and Call Sections */}
      <View style={styles.actionSection}>
        {/* add onPress */}
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../../assets/chat.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Chat</Text>
        </TouchableOpacity>

        {/* add onPress */}
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../../assets/call.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Call: {proUserData.phone}</Text>
        </TouchableOpacity>
      </View>

      {/* Expertise Card */}
      <View style={styles.expertiseCard}>
        <Text style={styles.expertiseTitle}>Expertises</Text>
        {expertises.map((expertise, index) => (
          <View style={styles.expertiseItem} key={index}>
            <Text style={styles.expertiseText}> {expertise}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.description}>{proUserData.description}</Text>

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
    marginBottom: 3,
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
    backgroundColor: "#8ACDD7",
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
  actionSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 10,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 16,
  },
});

export default ProProfilePage;
