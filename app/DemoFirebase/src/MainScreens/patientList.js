import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ViewPatients = ({ navigation }) => {
    const [patients, setPatients] = useState([
        { id: '1', firstName: 'Ayush', lastName: 'Mall', address: 'Ganga Hostel', age: '24', contact: '555-1234', emergencyContact: '555-5678', bloodGroup: 'B+', symptoms: 'Body Pain', allergies: 'No', followUp: '1 Week', diagnosis: 'PCR Test', treatment: 'Quarantine'},
        { id: '2', firstName: 'Pavan', lastName: 'Pujar', address: 'Narmada Hostel', age: '25', contact: '555-5678', emergencyContact: '555-1234', bloodGroup: 'B+', symptoms: 'Body Pain', allergies: 'No', followUp: '1 Week', diagnosis: 'PCR Test', treatment: 'Quarantine'},
    ]);

    const viewMedicalDetails = (patient) => {
        navigation.navigate('ViewMedicalDetails', { patient: patient });
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.firstName} {item.lastName}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => viewMedicalDetails(item)}
            >
                <Text style={styles.buttonText}>View Medical Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <FlatList
                data={patients}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#006600',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
    },
    backButton: {
        backgroundColor: '#000080',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    }
});

export default ViewPatients;


// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
// import { useDoctorContext } from './DoctorContext1';

// const ViewPatients = ({ navigation }) => {
//     const [patients, setPatients] = useState([
//         { id: '1', doctorId: '1', firstName: 'Hrishikesh', lastName: 'Tiwari', accessGranted: true },
//         { id: '2', doctorId: '2', firstName: 'Ayush', lastName: 'Kumar', accessGranted: false },
//         { id: '3', doctorId: '3', firstName: 'Abhishek', lastName: 'Singh', accessGranted: true },
//         { id: '4', doctorId: '4', firstName: 'Rishabh', lastName: 'Patel', accessGranted: false },
//         // Additional patient data
//     ]);

//     // Assuming you also fetch `grantedDoctors` from context or another state
//     const { grantedDoctors } = useDoctorContext();

//     const filteredPatients = patients.filter(patient => grantedDoctors.includes(patient.doctorId));

//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Text style={styles.itemText}>{item.firstName} {item.lastName}</Text>
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('PatientDetails', { patientId: item.id })}
//             >
//                 <Text style={styles.buttonText}>View Medical Details</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.mainContainer}>
//             <FlatList
//                 data={filteredPatients}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 contentContainerStyle={styles.container}
//             />
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//   mainContainer: {
//       flex: 1,
//       backgroundColor: '#f5f5f5',
//   },
//   container: {
//       flexGrow: 1,
//       padding: 20,
//   },
//   itemContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ccc',
//       marginBottom: 10,
//   },
//   itemText: {
//       fontSize: 16,
//       color: '#333',
//   },
//   button: {
//       backgroundColor: '#006600',
//       padding: 10,
//       borderRadius: 5,
//   },
//   buttonText: {
//       color: 'white',
//       fontSize: 14,
//   },
//   backButton: {
//       backgroundColor: '#000080',
//       padding: 10,
//       borderRadius: 5,
//       margin: 10,
//       alignSelf: 'flex-start',
//   },
//   backButtonText: {
//       color: 'white',
//       fontSize: 16,
//   }
// });

// export default ViewPatients;
