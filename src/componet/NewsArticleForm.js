// NewsArticleForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const NewsArticleForm = ({ formData, handleSubmit, handleChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={formData.title}
          onChangeText={(text) => handleChange('title', text)}
          placeholder="عنوان الخبر الجديد"
          style={styles.input}
        />
        <Text style={styles.label}>عنوان الخبر</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={formData.tobic}
          onChangeText={(text) => handleChange('tobic', text)}
          placeholder="موضوع الخبر"
          style={styles.input}
        />
        <Text style={styles.label}>تسجيل الخبر</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={formData.place}
          onChangeText={(text) => handleChange('place', text)}
          placeholder="مكان الخبر"
          style={styles.input}
        />
        <Text style={styles.label}>مكان الحدث</Text>
      </View>
      <Button
        title="نشر الخبر"
        onPress={handleSubmit}
        color="#007bff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  label: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default NewsArticleForm;
