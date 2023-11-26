// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import RNPickerSelect from "react-native-picker-select";

// const RegistrationPage = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [location, setLocation] = useState("");
//   const [userType, setUserType] = useState("");
//   const [nid, setNid] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [reEnterPassword, setReEnterPassword] = useState("");

//   const handleRegister = () => {
//     // Implement registration logic here
//     console.log("Registration details:", {
//       fullName,
//       email,
//       address,
//       location,
//       userType,
//       nid,
//       mobileNumber,
//       password,
//       reEnterPassword,
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.topBar}>
//         <Image source={require("../assets/logo.png")} style={styles.logo} />
//         <Text style={styles.appName}> Samadhan</Text>
//       </View>
//       <View style={styles.containerBody}>
//         <Text style={styles.title}>Register</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={fullName}
//           onChangeText={setFullName}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Full Address"
//           value={address}
//           onChangeText={setAddress}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Location Tag"
//           value={location}
//           onChangeText={setLocation}
//         />

//         <RNPickerSelect
//           style={pickerSelectStyles}
//           placeholder={{ label: "Select User Type", value: "" }}
//           onValueChange={(value) => setUserType(value)}
//           items={[
//             { label: "Job Provider", value: "jobProvider" },
//             { label: "Service Professional", value: "serviceProfessional" },
//           ]}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="NID"
//           keyboardType="numeric"
//           value={nid}
//           onChangeText={setNid}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           keyboardType="phone-pad"
//           value={mobileNumber}
//           onChangeText={setMobileNumber}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Re-enter Password"
//           secureTextEntry
//           value={reEnterPassword}
//           onChangeText={setReEnterPassword}
//         />

//         <TouchableOpacity
//           style={styles.registerButton}
//           onPress={handleRegister}
//         >
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topBar: {
//     flexDirection: "row",
//     flexGrow: 1,
//     // justifyContent: "space-between",
//     alignItems: "center",
//   },
//   body: {
//     flexGrow: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   appName: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 8,
//     marginRight: 20,
//     justifyContent: "center",
//   },
//   containerBody: {
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 16,
//     paddingHorizontal: 12,
//   },
//   registerButton: {
//     backgroundColor: "#3498db",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 16,
//     paddingHorizontal: 12,
//   },
//   inputAndroid: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 16,
//     paddingHorizontal: 12,
//   },
// });

// export default RegistrationPage;
