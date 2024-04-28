import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ViewHistory = ({ navigation }) => {
  const [history, setHistory] = useState([
    { id: '1', date: '2024-04-13', lastChangedBy: 'Dr. Hrishikesh Tiwari', diagnosis: 'Flu' },
    { id: '2', date: '2024-04-10', lastChangedBy: 'Dr. Abhishek Singh', diagnosis: 'Cold' },
    { id: '3', date: '2024-04-13', lastChangedBy: 'Dr. Ayush Kumar', diagnosis: 'Cold' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.iconContainer}>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.infoText}>Last Changed By: {item.lastChangedBy}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.infoText}>Diagnosis: {item.diagnosis}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
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
    borderRadius: 5,
    alignSelf: 'flex-start',
    margin: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  listItem: {
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  infoContainer: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
  },
  flatListContent: {
    paddingVertical: 10,
  },
});

export default ViewHistory;