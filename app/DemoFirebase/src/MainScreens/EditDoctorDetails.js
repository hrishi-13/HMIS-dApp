import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useDoctorData } from './doctorContext';


const EditDoctorDetails = ({ route, navigation }) => {

  const { doctorData, setDoctorData } = useDoctorData();
  const [formData, setFormData] = useState(doctorData);

  const handleSave = () => {
    console.group('Form Data');
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`%c${key}:`, 'color: blue; font-weight: bold', value);
    });
    console.groupEnd();
    
    setDoctorData(formData);
    Alert.alert('Changes Saved!');
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {Object.keys(doctorData).map((key) => (
          <View key={key} style={styles.inputContainer}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffde7',
  },
  inputContainer: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#5c67f2',
    paddingBottom: 8,
  },
  input: {
    height: 50,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor:'#8b0000',
    shadowColor: '#BDBDBD',
  },
  saveButton: {
    backgroundColor: '#008000',
    shadowColor: '#5C6BC0',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default EditDoctorDetails;