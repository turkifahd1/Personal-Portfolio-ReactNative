import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Header from '../componet/header';
import tw from 'twrnc';
const API_URL = 'https://node-js-backend-personal-portfolio.onrender.com/api';

export default function NewsArticlePage() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    projectLink: '',
    images: ''
  });



// داخل NewsArticlePage.js بعد التعديلات التي قمت بها
const navigation = useNavigation();

const handleSubmit = async () => {
  try {
    const response = await axios.post(API_URL, formData);
    if (response.status === 200) {
      Alert.alert('Success', 'Data submitted successfully!');
      setFormData({
        projectName: '',
        description: '',
        projectLink: '',
        images: ''
      });

      // إعادة تحميل الصفحة بعد إرسال البيانات بنجاح
      navigation.navigate('NewsArticle');
    } else {
      throw new Error('Failed to submit data');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    Alert.alert('Error', 'An error occurred while submitting the data. Please try again!');
  }
};


  return (
    <View style={tw`flex-1`}>
      <Header/>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Send Data to API</Text>
          <Text style={styles.description}>Fill in the details below to send data to the API.</Text>
          <TextInput
            style={styles.input}
            placeholder="Project Name"
            value={formData.projectName}
            onChangeText={(value) => setFormData({ ...formData, projectName: value })}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Description"
            value={formData.description}
            onChangeText={(value) => setFormData({ ...formData, description: value })}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Project Link"
            value={formData.projectLink}
            onChangeText={(value) => setFormData({ ...formData, projectLink: value })}
          />
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            value={formData.images}
            onChangeText={(value) => setFormData({ ...formData, images: value })}
          />
          <Button title="Send Data" onPress={handleSubmit} />
        </View>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  formContainer: {
    width: '80%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
