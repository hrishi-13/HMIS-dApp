import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDoctorData } from './doctorContext';

const CreateDoctorForm = ({ navigation }) => {

  const { setDoctorData } = useDoctorData();  // Use context to set doctor data

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    hospital: '',
    specialty: '',
    contact: '',
    email: ''
  });

  const handleSave = () => {
    if (Object.values(formData).some(value => value === '')) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    console.group('Form Data');
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`%c${key}:`, 'color: blue; font-weight: bold', value);
    });
    console.groupEnd();

    setDoctorData(formData);  // Update the context with the new doctor data
    Alert.alert('Success', 'Doctor data saved successfully!');
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
      {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={styles.inputGroup}>
            <FontAwesome5 name={key === 'firstName' || key === 'lastName' ? "user-md" : key === 'hospital' ? "hospital" : key === 'specialty' ? "stethoscope" : key === 'contact' ? "phone" : "envelope"} size={18} color="#333" style={styles.inputIcon} />
            <TextInput
              placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              value={value}
              onChangeText={(text) => handleChange(key, text)}
              style={styles.input}
              keyboardType={key === 'contact' ? 'phone-pad' : 'default'}
            />
          </View>
        ))}
        
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fffde7',
  },
  formContainer: {
    flex: 1,
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
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Ensures buttons are evenly spaced
    marginTop: 20,
  },
  button: {
    flex: 1, // Each button takes up half the container
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Spacing between buttons
  },
  saveButton: {
    backgroundColor: '#008000',  // Green color for the save button
  },
  cancelButton: {
    backgroundColor: '#800000', // Tomato red for the cancel button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Center text within the button
  },
});

export default CreateDoctorForm;