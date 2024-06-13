import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'; // تأكد من تثبيت twrnc واستخدامه بشكل صحيح

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://node-js-backend-personal-portfolio.onrender.com/api');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // للتأكد من جلب البيانات بشكل صحيح
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={tw`mt-5 p-3 bg-gray-200 rounded-lg`}>
      <Image source={{ uri: item.images }} style={styles.image} />
      <Text style={tw`text-lg font-bold`}>{item.projectName}</Text>
      <Text>{item.description}</Text>
      <Text style={tw`text-blue-500`} onPress={() => Linking.openURL(item.projectLink)}>
        الرابط: {item.projectLink}
      </Text>
      <View style={tw`flex-row justify-between mt-2`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditNews', { id: item.id })}
          style={tw`p-2 rounded-md bg-blue-500`}
        >
          <Text style={tw`text-white font-bold`}>عرض التفاصيل</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={tw`p-2 rounded-md bg-red-500`}
        >
          <Text style={tw`text-white font-bold`}>حذف</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 p-5 mt-10`}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" style={tw`mt-30`} />
        ) : projects.length > 0 ? (
          <FlatList
            data={projects}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={tw`text-center`}>No projects available</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
