import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PatientDetails = ({ route }) => {
  // Extract patient data passed through navigation parameters
  const { patientData } = route.params;
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Personal Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.info}>{patientData.firstName}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.info}>{patientData.lastName}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>{patientData.address}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>{patientData.age}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.info}>{patientData.contact}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Emergency Contact Number:</Text>
        <Text style={styles.info}>{patientData.emergencyContact}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',  // Light grey background
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#483D8B',  // Dark purple text for the title
  },
  detailContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',  // Black color for labels
  },
  info: {
    fontSize: 16,
    color: '#666',  // Dark grey for information text
    marginLeft: 5,
  }
});

export default PersonalDetails;