import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ViewDoctors = ({ navigation }) => {
  const [doctors, setDoctors] = useState([
    { id: '1', name: 'Dr. Hrishikesh Tiwari', accessGranted: false },
    { id: '2', name: 'Dr. Ayush Kumar', accessGranted: true },
    { id: '3', name: 'Dr. Abhishek Singh', accessGranted: true },
    { id: '4', name: 'Dr. Rishabh Patel', accessGranted: false }
  ]);

  const toggleAccess = (id) => {
    const updatedDoctors = doctors.map(doctor => doctor.id === id ? { ...doctor, accessGranted: !doctor.accessGranted } : doctor);
    setDoctors(updatedDoctors);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.doctorInfo}>
        <FontAwesome5 name="user-md" size={24} color="#333" />
        <Text style={styles.doctorName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={[styles.accessButton, item.accessGranted ? styles.revokeButton : styles.grantButton]}
        onPress={() => toggleAccess(item.id)}
      >
        <Text style={styles.accessButtonText}>{item.accessGranted ? 'Revoke Access' : 'Grant Access'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <FlatList
        data={doctors}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffde7',
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#000080',
    alignSelf: 'flex-start',
    borderRadius: 5,
    margin: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  accessButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  grantButton: {
    backgroundColor: '#008000',
  },
  revokeButton: {
    backgroundColor: '#b22222',
  },
  accessButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingVertical: 10,
  },
});

export default ViewDoctors;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { useDoctorContext } from './DoctorContext1';

// const ViewDoctors = ({ navigation }) => {
//   const { grantedDoctors, grantAccess, revokeAccess } = useDoctorContext();
//   const doctors = [
//     { id: '1', name: 'Dr. Hrishikesh Tiwari' },
//     { id: '2', name: 'Dr. Ayush Kumar' },
//     { id: '3', name: 'Dr. Abhishek Singh' },
//     { id: '4', name: 'Dr. Rishabh Patel' }
//   ];

//   const toggleAccess = (id) => {
//     if (grantedDoctors.includes(id)) {
//       revokeAccess(id);
//     } else {
//       grantAccess(id);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.listItem}>
//       <View style={styles.doctorInfo}>
//         <FontAwesome5 name="user-md" size={24} color="#333" />
//         <Text style={styles.doctorName}>{item.name}</Text>
//       </View>
//       <TouchableOpacity
//         style={[styles.accessButton, grantedDoctors.includes(item.id) ? styles.revokeButton : styles.grantButton]}
//         onPress={() => toggleAccess(item.id)}
//       >
//         <Text style={styles.accessButtonText}>{grantedDoctors.includes(item.id) ? 'Revoke Access' : 'Grant Access'}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={doctors}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffde7',
//   },
//   backButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#000080',
//     alignSelf: 'flex-start',
//     borderRadius: 5,
//     margin: 10,
//   },
//   backButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   listItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   doctorInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   doctorName: {
//     fontSize: 18,
//     marginLeft: 10,
//     flex: 1,
//   },
//   accessButton: {
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   grantButton: {
//     backgroundColor: '#008000',
//   },
//   revokeButton: {
//     backgroundColor: '#b22222',
//   },
//   accessButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   flatListContent: {
//     paddingVertical: 10,
//   },
// });

// export default ViewDoctors;
