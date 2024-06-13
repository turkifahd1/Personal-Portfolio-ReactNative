// screens/ProjectsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

function ProjectsScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://node-js-backend-personal-portfolio.onrender.com/api')
      .then(response => {
        setProjects(response.data.projects);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectName}>{item.projectName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.projectLink}>{item.projectLink}</Text>
      {item.images && item.images.length > 0 && (
        <Image
          source={{ uri: item.images[0] }}
          style={styles.image}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={(item) => item.projectName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  projectItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
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
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  projectLink: {
    fontSize: 14,
    color: 'blue',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});

export default ProjectsScreen;
