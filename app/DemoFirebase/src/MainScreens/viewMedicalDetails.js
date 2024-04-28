import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ViewMedicalDetails = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const [doctorData, setDoctorData] = useState({
    firstName: 'Hrishikesh',
    lastName: 'Tiwari',
    address: 'Ganga Hostel',
    age:'24',
    bloodGroup: 'B+',
    symptoms: 'Fever',
    allergies: 'No',
    diagnosis: 'Quarantine',
    treatment: 'cheston',
    followup: '1 Week',
    contactNumber: '8209879295',
    email: 'cs22m022@smail.iitm.ac.in'
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        {Object.entries(doctorData).map(([key, value]) => (
          <Text style={styles.label} key={key}>{`${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${value}`}</Text>
        ))}
      </View>

      <Animatable.View animation="fadeInUp" delay={1000} style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonEdit]}
          onPress={() => navigation.navigate('EditMedicalDetails', { doctorData, setDoctorData })}
        >
          <Text style={styles.buttonText}>Edit Medical Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonBack]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  detailContainer: {
    marginBottom: 30,
    backgroundColor: '#402E32',
    padding: 15,
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 2,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonEdit: {
    backgroundColor: '#800000',
  },
  buttonBack: {
    backgroundColor: '#000080',  // Different color for back button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ViewMedicalDetails;
