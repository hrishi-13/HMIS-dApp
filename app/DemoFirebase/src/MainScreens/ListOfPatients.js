// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { usePatientData } from './patientContext1';  // Import your patient context hook

// const ListOfPatients = ({ navigation }) => {
//   const { patients } = usePatientData();  // Assuming you have a patients array in your context

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemText}>{`${item.firstName} ${item.lastName}`}</Text>
//       <TouchableOpacity
//         style={styles.detailsButton}
//         onPress={() => navigation.navigate('PatientDetails', { patientId: item.id })}
//       >
//         <Text style={styles.buttonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={patients}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   itemText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   detailsButton: {
//     backgroundColor: '#0066cc',
//     padding: 8,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default ListOfPatients;


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { firebase } from '../Firebase/FirebaseConfig';

const ListOfPatients = ({ navigation }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const onValueChange = database()
      .ref('/patients')
      .on('value', snapshot => {
        const data = snapshot.val();
        const patientsList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setPatients(patientsList);
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/patients').off('value', onValueChange);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => {
        /* Implement navigation or other interaction */
        console.log('Selected Patient:', item);
      }}
    >
      <Text style={styles.itemText}>{item.firstName} {item.lastName}</Text>
    </TouchableOpacity>
  );


  const handleData = async () => {
        // const docref = firebase.firestore().collection('UserProfiles')
        const docref = firebase.firestore().collection('ListOfPatients');
        const doc1 = await docref.get();

        // if (!doc.empty) {
        //     console.log('ok Done 1')


        // }
        if (!doc1.empty) {
            doc1.forEach((doc) => {
                const data = doc.data();
                // console.log('ok Done 1', data);
                // You can access the fields in 'data' now.
            });
        } else {
            console.log('No documents found.');
        }


    }
    useEffect(() => {
        handleData()
    }, [])


  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ListOfPatients;

