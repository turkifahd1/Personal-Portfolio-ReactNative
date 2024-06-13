// EditNewsForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';

const EditNewsForm = ({ editedTitle, setEditedTitle, editedTopic, setEditedTopic, editedPlace, setEditedPlace, handleUpdate }) => {
  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/image/bbbb.jpeg')}
        style={styles.image}
      />
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={editedTitle}
        onChangeText={setEditedTitle}
        placeholder="Enter title"
        style={styles.input}
      />
      <Text style={styles.label}>Topic</Text>
      <TextInput
        value={editedTopic}
        onChangeText={setEditedTopic}
        placeholder="Enter topic"
        style={styles.input}
      />
      <Text style={styles.label}>Place</Text>
      <TextInput
        value={editedPlace}
        onChangeText={setEditedPlace}
        placeholder="Enter place"
        style={styles.input}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop:60
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:60,
    marginLeft:120
  },
});

export default EditNewsForm;
