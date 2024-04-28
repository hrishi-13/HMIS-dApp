// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';  // Ensure FontAwesome5 is correctly imported
// import { usePatientData } from './PatientContext';


// const CreatePatientForm = ({ navigation }) => {
//   const { setPatientData } = usePatientData();
//   const [formData, setFormData] = useState({
//     firstName: '', 
//     lastName: '', 
//     address: '', 
//     age: '', 
//     bloodGroup: '', 
//     contact: '', 
//     email: ''
//   });

//   const handleSave = () => {
//     if (Object.values(formData).some(value => value === '')) {
//       Alert.alert('Error', 'All fields are required.');
//       return;
//     }

//     console.group('Form Data');
//     Object.entries(formData).forEach(([key, value]) => {
//       console.log(`%c${key}:`, 'color: blue; font-weight: bold', value);
//     });
//     console.groupEnd();

//     setPatientData(formData);
//     Alert.alert('Success', 'Patient data saved successfully!');
//     navigation.goBack();
//   };

//   const handleChange = (name, value) => {
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleCancel = () => {
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {Object.entries(formData).map(([key, value]) => (
//         <View key={key} style={styles.inputGroup}>
//           <FontAwesome5 name={key === 'email' ? 'envelope' : key === 'contact' ? 'phone' : 'user'} size={18} color="#333" style={styles.inputIcon} />
//           <TextInput
//             placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//             value={value}
//             onChangeText={(text) => handleChange(key, text)}
//             style={styles.input}
//             keyboardType={key === 'age' || key === 'contact' ? 'numeric' : 'default'}
//             secureTextEntry={key === 'password'}
//           />
//         </View>
//       ))}

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//     padding: 20,
//     backgroundColor: '#fffde7',  // Uniform light yellow background
//   },
//   inputGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   inputIcon: {
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#ffffff',  // Maintaining contrast for readability
//   },
//   saveButton: {
//     backgroundColor: '#008000',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,  // Allows button to expand
//     marginRight: 10,  // Adds margin between buttons
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',  // Ensures buttons are evenly spaced
//     marginTop: 20,
//   },
//   cancelButton: {
//     backgroundColor: '#800000',  // Tomato color for the cancel button
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,  // Allows button to expand
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',  // Centers text in the button
//   },
// });

// export default CreatePatientForm;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';
import { firebase } from '../Firebase/FirebaseConfig';


const CreatePatientForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', age: '', bloodGroup: '', contact: '', email: ''
  });

  const handleSave = () => {
    if (Object.values(formData).some(value => value === '')) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Save the data to Firebase
    const newRef = database().ref('/patients').push();
    newRef.set(formData, error => {
      if (error) {
        Alert.alert('Error', 'Data could not be saved.' + error);
      } else {
        Alert.alert('Success', 'Patient data saved successfully!');
        navigation.goBack();
      }
    });
  };

  const handleChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(formData).map(([key, value]) => (
        <View key={key} style={styles.inputGroup}>
          <FontAwesome5 name={key === 'email' ? 'envelope' : key === 'contact' ? 'phone' : 'user'} size={18} color="#333" style={styles.inputIcon} />
          <TextInput
            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            value={value}
            onChangeText={(text) => handleChange(key, text)}
            style={styles.input}
            keyboardType={key === 'age' || key === 'contact' ? 'numeric' : 'default'}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fffde7',  // Uniform light yellow background
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',  // Maintaining contrast for readability
  },
  saveButton: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    flex: 1,  // Allows button to expand
    marginRight: 10,  // Adds margin between buttons
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Ensures buttons are evenly spaced
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#800000',  // Tomato color for the cancel button
    padding: 10,
    borderRadius: 5,
    flex: 1,  // Allows button to expand
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  // Centers text in the button
  },
});

export default CreatePatientForm;