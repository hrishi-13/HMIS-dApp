import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import { usePatientData } from './PatientContext';

const EditPersonalDetails = ({ route, navigation }) => {
  // const { patientData, setPatientData } = route.params;
  const { patientData, setPatientData } = usePatientData();

  const [formData, setFormData] = useState(patientData);

  const handleSave = () => {
    console.group('Form Data');
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`%c${key}:`, 'color: blue; font-weight: bold', value);
    });
    console.groupEnd();
    
    setPatientData(formData);
    Alert.alert('Changes Saved!');
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      {Object.keys(patientData).map((key) => (
        <View key={key} style={styles.inputGroup}>
          <TextInput
            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            value={formData[key]}
            onChangeText={(text) => setFormData({ ...formData, [key]: text })}
            style={styles.input}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffde7',
  },
  inputGroup: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#5c67f2',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor: '#8b0000',
    shadowColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#008000',
    shadowColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditPersonalDetails;