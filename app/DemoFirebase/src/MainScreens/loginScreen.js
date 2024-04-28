import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = ({ navigation }) => {
  const [role, setRole] = useState('admin');
  const [hospital, setHospital] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Username and password are required.');
      return;
    }

    switch (role) {
      case 'admin':
        navigation.navigate('AdminDashboard');
        break;
      case 'patient':
        navigation.navigate('PatientDetails');
        break;
      case 'doctor':
        navigation.navigate('DoctorDetails');
        break;
      default:
        Alert.alert('Error', 'Invalid role selected.');
        break;
    }
  };

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };

  React.useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animationValue]);

  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      <Animatable.View animation="fadeInDown" delay={500} style={styles.logoContainer}>
        <FontAwesome5 name="hospital" size={60} color="#fff" />
      </Animatable.View>
      <Animated.View style={[styles.formContainer, animatedStyle]}>
        <Text style={styles.title}>HMIS</Text>
        <Animatable.View animation="fadeInUp" delay={500} style={styles.formGroup}>
          <Text style={styles.label}>Role</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="Patient" value="patient" />
            <Picker.Item label="Doctor" value="doctor" />
          </Picker>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={600} style={styles.formGroup}>
        <Text style={styles.label}>Hospital</Text>
        <Picker
          selectedValue={hospital}
          onValueChange={(itemValue) => setHospital(itemValue)}
          style={styles.picker}>
          <Picker.Item label="IIT Madras Hospital" value="iit_madras_hospital" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={700} style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={800} style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureEntry}
              style={[styles.input, styles.passwordInput]}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={toggleSecureEntry}>
              <FontAwesome5 name={secureEntry ? 'eye-slash' : 'eye'} size={18} color="#333" />
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={900}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,  // Ensure this margin is consistent for all groups
  },
  inputGroup: {  // This style was added for the Email input
    marginBottom: 15,  // Maintain uniform spacing
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeButton: {
    padding: 10,
  },
  button: {
    backgroundColor: '#1e3c72',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});


export default LoginScreen;