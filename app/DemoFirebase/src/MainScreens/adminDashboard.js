import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from '@react-navigation/native';


const AdminDashboard = ({ navigation }) => {
  const handleCancel = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Yes",
          onPress: () => {
            Alert.alert('Logout successfully!');
            navigation.goBack();
          }
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };


  return (
    <LinearGradient colors={['#000000', '#000000']} style={styles.container}>
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={styles.buttonLogout} onPress={handleCancel}>
          <Icon name="logout" size={16} color="#000000" />
          <Text style={styles.buttonLogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>

      <Animatable.View animation="fadeInUp" delay={500} style={styles.buttonsContainer}>

      <TouchableOpacity style={[styles.button, styles.createPatientButton]} onPress={() => navigation.navigate('CreatePatientForm')}>
        <Icon name="person-add" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>Create Patient </Text>
      </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.buttonsContainer}>

      <TouchableOpacity style={[styles.button, styles.listPatientsButton]} onPress={() => navigation.navigate('ListOfPatients')}>
        <Icon name="format-list-bulleted" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>Patients List    </Text>
      </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={900} style={styles.buttonsContainer}>

      <TouchableOpacity style={[styles.button, styles.createDoctorButton]} onPress={() => navigation.navigate('CreateDoctorForm')}>
        <Icon name="person-add" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>Create Doctor </Text>
      </TouchableOpacity>

      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={1100} style={styles.buttonsContainer}>

      <TouchableOpacity style={[styles.button, styles.listDoctorsButton]} onPress={() => navigation.navigate('ListOfDoctors')}>
        <Icon name="format-list-bulleted" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>Doctors List    </Text>
      </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
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
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  createPatientButton: {
    backgroundColor: '#800000',
  },
  listPatientsButton: {
    backgroundColor: '#008000',
  },
  createDoctorButton: {
    backgroundColor: '#3f51b5',
  },
  listDoctorsButton: {
    backgroundColor: '#cd853f',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default AdminDashboard;