import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { setDoctorData} from './PatientContext';
import { useDoctorData } from './doctorContext';
import Icon from 'react-native-vector-icons/MaterialIcons';


const DoctorDetails = ({ navigation, route }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const { doctorData } = useDoctorData();

  const formatLabel = (text) => {
    return text
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  const updatePatientDetails = (updatedDetails) => {
    setDoctorData(updatedDetails);
  };

  useEffect(() => {
  }, [doctorData]);

  const handleCancel = () => {
    // Use Alert to ask if user is sure they want to logout
    Alert.alert(
      "Confirm Logout", // Title of the alert
      "Are you sure you want to logout?", // Message of the alert
      [
        
        { text: "Yes", onPress: () => {
          Alert.alert('Logout successfully!');
          navigation.goBack();
        } },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"), // No action taken on "No"
          style: "cancel"
        }
      ],
      { cancelable: false } // Prevents tapping outside the dialog from dismissing it
    );
  };


  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logout button */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Doctor Dashboard</Text>
      </View>

      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={[styles.buttonLogout]} onPress={handleCancel}>
          <Icon name="logout" size={16} color="#000000" />
          <Text style={styles.buttonLogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        {Object.entries(doctorData).map(([key, value]) => (
          <Text style={styles.label} key={key}>{`${formatLabel(key)}: ${value}`}</Text>
        ))}
      </View>

      <Animatable.View animation="fadeInUp" delay={1000} style={styles.buttonsContainer}>
        <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
          <TouchableOpacity
            style={[styles.button, styles.buttonEdit]}
            onPress={() => navigation.navigate('EditDoctorDetails', { doctorData, setDoctorData })}
          >
            <Icon name="edit" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>Edit Doctor Details  </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animatable.View animation="fadeInUp" delay={1400} style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonViewPatients]} onPress={() => navigation.navigate('PatientList')}>
            <Icon name="visibility" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>View Patients           </Text>
          </TouchableOpacity>
        </Animatable.View>
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
  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
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
    // flexDirection: 'row',
    // padding: 15,
    // borderRadius: 10,
    // width: 300,
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 5,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,
  },
  buttonEdit: {
    backgroundColor: '#800000',
  },
  buttonViewPatients: {
    backgroundColor: '#4169e1',
  },
  buttonLogout: {
    backgroundColor: '#ffe4c4',
    padding: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLogoutText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default DoctorDetails;