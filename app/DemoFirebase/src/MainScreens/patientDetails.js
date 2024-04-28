import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { usePatientData, setPatientData} from './PatientContext';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PatientDetails = ({ navigation, route }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const { patientData } = usePatientData();

  const handleCancel = () => {
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


    const formatLabel = (text) => {
    return text
      // split camelCase
      .replace(/([A-Z])/g, ' $1')
      // capitalize the first character
      .replace(/^./, (str) => str.toUpperCase());
  };

  const updatePatientDetails = (updatedDetails) => {
    setPatientData(updatedDetails);
  };

  // Update the patient data when navigating back from EditPersonalDetails
  useEffect(() => {
    if (route.params?.updatedData) {
      setPatientData(route.params.updatedData);
    }
  }, [route.params?.updatedData]);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.patientData) {
        setPatientData(route.params.patientData);
      }
    }, [route.params?.patientData])
  );

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 500, useNativeDriver: true })
    ]).start();
  }, []);


  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Patient Dashboard</Text>
      </View>

       <View style={styles.detailContainer}>
         {Object.entries(patientData).map(([key, value]) => (
           <Text style={styles.label} key={key}>{`${formatLabel(key)}: ${value}`}</Text>
        ))}
       </View>

       <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={[styles.buttonLogout]} onPress={handleCancel}>
          <Icon name="logout" size={16} color="#000000" />
          <Text style={styles.buttonLogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      

       <Animatable.View animation="fadeInUp" delay={500} style={styles.buttonsContainer}>
         <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
           <TouchableOpacity
            style={[styles.button, styles.buttonEdit]}
            onPress={() => navigation.navigate('EditPersonalDetails', { patientData, setPatientData })}
          >
            <Icon name="edit" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>Edit Personal Details  </Text>
          </TouchableOpacity>
        </Animated.View>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonViewDoctors]}
            onPress={() => navigation.navigate('ViewDoctors')}
          >
            <Icon name="visibility" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>View Doctors               </Text>
          </TouchableOpacity>
        </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={900} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonViewHistory]}
            onPress={() => navigation.navigate('ViewHistory')}
          >
            <Icon name="history" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>View History                </Text>
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
    backgroundColor: '#000000', // A deep wood brown background for a rich look
    padding: 20,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    marginBottom: 30,
    backgroundColor: '#402E32', // A dark desaturated purple for contrast
    padding: 15,
    borderRadius: 10,
    borderColor: '#FFD700', // Gold border for elegance
    borderWidth: 2,
  },
  label: {
    // color: '#FFD700', // Gold text for a luxury feel
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    // width: '100%',
    marginBottom: 20,
  },
  button: {
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
    backgroundColor: '#008000', // Lively green for edit button
  },
  buttonViewDoctors: {
    backgroundColor: '#b22222', // Bright orange for a dynamic contrast
  },
  buttonViewHistory: {
    backgroundColor: '#4169e1', // Cool blue for history button
  },
  buttonLogout: {
    backgroundColor: '#ffe4c4',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLogoutText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});

export default PatientDetails;