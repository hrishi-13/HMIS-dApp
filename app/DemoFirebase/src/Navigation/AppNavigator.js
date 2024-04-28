import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import AdminDashboard from '../screens/adminDashboard';
import CreatePatientForm from '../screens/createPatient';
import CreateDoctorForm from '../screens/createDoctor';
import PatientDetails from '../screens/patientDetails';
import EditPersonalDetails from '../screens/EditPersonalDetails';
import ViewDoctors from '../screens/ViewDoctors';
import ViewHistory from '../screens/ViewHistory';
import DoctorDetails from '../screens/doctorDetails';
import PatientList from '../screens/patientList';
import EditMedicalDetails from '../screens/EditMedicalDetails';
import ViewMedicalDetails from '../screens/viewMedicalDetails';
import EditDoctorDetails from '../screens/EditDoctorDetails';
import { PatientDataProvider } from '../screens/PatientContext';
import { DoctorDataProvider } from '../screens/doctorContext';
import { DoctorProvider } from '../screens/DoctorContext1';
import ListOfPatients from '../screens/ListOfPatients';
import ListOfDoctors from '../screens/ListOfDoctors';
import { PatientProvider } from '../screens/patientContext1';

import '@react-native-firebase/app';
import database from '@react-native-firebase/database';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <PatientProvider>
    <PatientDataProvider>
    <DoctorDataProvider>
    <DoctorProvider>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: '' }} />
        <Stack.Screen name="CreatePatientForm" component={CreatePatientForm} options={{ title: 'Create Patient' }} />
        <Stack.Screen name="CreateDoctorForm" component={CreateDoctorForm} options={{ title: 'Create Doctor' }} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} options={{ title: '' }} />
        <Stack.Screen name="EditPersonalDetails" component={EditPersonalDetails} options={{ title: 'Edit Personal Details' }} />
        <Stack.Screen name="ViewDoctors" component={ViewDoctors} options={{ title: 'Doctors' }} />
        <Stack.Screen name="ViewHistory" component={ViewHistory} options={{ title: 'History' }} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} options={{ title: '' }} />
        <Stack.Screen name="PatientList" component={PatientList} options={{ title: 'List of Patients' }} />
        <Stack.Screen name="EditMedicalDetails" component={EditMedicalDetails} options={{ title: 'Edit Medical Details' }} />
        <Stack.Screen name="ViewMedicalDetails" component={ViewMedicalDetails} options={{ title: 'Medical Details' }} />
        <Stack.Screen name="EditDoctorDetails" component={EditDoctorDetails} options={{ title: 'Edit Doctor Details' }} />
        <Stack.Screen name="ListOfPatients" component={ListOfPatients} options={{ title: 'List of Patients' }} />
      </Stack.Navigator>
    </DoctorProvider>
    </DoctorDataProvider>
    </PatientDataProvider>
    </PatientProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
