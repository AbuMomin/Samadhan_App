import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const ClientHomePage = (props: any) => {
  const navPostJob = () => {
    props.navigation.navigate("PostJob");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* <Image source={require("../../assets/logo.png")} style={styles.logo} /> */}
        <Text style={styles.appName}>Samadhan</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.platformDescription}>
          Connecting Local professionals to Household Service needs.
        </Text>

        <TouchableOpacity style={styles.postJobButton} onPress={navPostJob}>
          <Text style={styles.postJobButtonText}>Post your Household Job</Text>
        </TouchableOpacity>

        <Text style={styles.jobDescription}>
          You can post various household and technical issues, such as plumbing,
          electrical problems, furniture repair, and appliance maintenance.
        </Text>

        <View style={styles.ongoingJobsSection}>
          <Text style={styles.sectionTitle}>Your Ongoing Jobs</Text>
          {/* Generate two cards */}
          <ScrollView>
            <View style={styles.jobCard}>
              {/* Blurred image background */}
              <Image
                source={require("../../assets/plumber.jpg")}
                style={styles.cardBackground}
              />
              <Text style={styles.cardTitle}>Plumbing</Text>
            </View>

            <View style={styles.jobCard}>
              {/* Blurred image background */}
              <Image
                source={require("../../assets/electrician.jpg")}
                style={styles.cardBackground}
              />
              <Text style={styles.cardTitle}>Electricity</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    height: 80,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 8,
    paddingRight: 20,
  },
  appName: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3498db", // Change the text color to a more eye-catching color
    textShadowColor: "#aaa",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  body: {
    padding: 16,
  },
  platformDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  postJobButton: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    height: 70,
    justifyContent: "center",
  },
  postJobButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  jobDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 16,
  },
  ongoingJobsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  jobCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 2,
  },
  cardBackground: {
    width: "100%",
    height: 150,
  },
  cardTitle: {
    padding: 12,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default ClientHomePage;
