import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const HomePageClient: React.FC = (props: any) => {
  const [searchText, setSearchText] = useState("");
  const [professionals, setProfessionals] = useState([]);

  const navProfileHandler = () => {
    props.navigation.navigate("ProProfilePage");
  };

  // Fetch Professionals on component mount or when the search term changes
  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        let response;
        if (searchText) {
          // finding professional based on search
          response = await axios.get(
            `http://192.168.0.106:3000/user/search-professionals/?searchText=${searchText}`
          );
        } else {
          response = await axios.get(
            `http://192.168.0.106:3000/user/all-professionals`
          );
        }
        setProfessionals(response.data);
      } catch (error) {
        console.error("Error fetching professionals:", error);
      }
    };

    fetchProfessionals();
  }, [searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.appName}>Samadhan</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.platformDescription}>
          Connecting Local professionals to Household Service needs
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.jobDescription}>
          Find professionals for plumbing, electric, electronics, stove,
          furniture repair and more!
        </Text>

        <ScrollView
          contentContainerStyle={styles.professionalsContainer}
          horizontal={false}
        >
          {professionals.map((professional) => (
            <TouchableOpacity
              key={professional.id}
              style={styles.professionalCard}
              onPress={navProfileHandler}
            >
              <Image
                source={require("../../assets/person.png")}
                style={styles.professionalImage}
              />
              <Text style={styles.professionalName}>
                <Text>{professional.last_name}</Text>
              </Text>
              <Text style={styles.professionalExpertise}>
                <Text>{professional.expertise}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db",
  },
  body: {
    flex: 1,
  },
  platformDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: "#555",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#3498db",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#3498db",
    marginLeft: 8,
    padding: 10,
    borderRadius: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  jobDescription: {
    fontSize: 14,
    marginBottom: 16,
    color: "#555",
  },
  professionalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  professionalCard: {
    width: "48%", // Adjust width based on your design
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  professionalImage: {
    width: "100%",
    height: 100, // Adjust height based on your design
    resizeMode: "cover",
  },
  professionalName: {
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  professionalExpertise: {
    padding: 8,
    fontSize: 14,
    color: "#555",
  },
});

export default HomePageClient;
