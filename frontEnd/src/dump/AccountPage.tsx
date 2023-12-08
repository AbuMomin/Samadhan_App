// import React, { useEffect } from "react";
// import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useAuth } from "../providers/AuthProvider";
// import axios from "axios";

// const AccountPage = (props: any) => {
//   const { userId, logout } = useAuth();

//   let userData;

//   useEffect(() => {
//     // Make Axios GET request to getUserById
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `http://192.168.0.106:3000/user/getById?userID=${userId}}`
//         );
//         console.log(response.data);
//         userData = response.data;
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.userProfile}>
//         {/* Stylish user image */}
//         <Image
//           source={require("../../assets/profile.png")} // replace with your image source
//           style={styles.userImage}
//         />
//         {/* User name in big font */}
//         <Text style={styles.userName}>
//           {userData.first_name} {userData.last_name}
//         </Text>
//         {/* User type in good-looking font and font weight */}
//         <Text style={styles.userType}>
//           {userData.role == 1 ? "User" : "Professional"}
//         </Text>
//       </View>

//       {/* Other buttons */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Profile Settings</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>History</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Learn About Samadhan</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.button, styles.logoutButton]}
//         onPress={handleLogout}
//       >
//         <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   userProfile: {
//     alignItems: "center",
//   },
//   userImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 10,
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   userType: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#555",
//   },
//   button: {
//     width: "60%",
//     padding: 10,
//     marginVertical: 5,
//     borderWidth: 1,
//     borderRadius: 20,
//     borderColor: "#000",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontSize: 18,
//   },
//   logoutButton: {
//     backgroundColor: "#860A35",
//   },
//   logoutText: {
//     color: "#fff",
//   },
// });

// export default AccountPage;

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../providers/AuthProvider";
// import { useNavigation } from "@react-navigation/native";

const AccountPage = (props: any) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profile Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
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
    width: "60%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "#860A35",
  },
  logoutText: {
    color: "#fff",
  },
});

export default AccountPage;
