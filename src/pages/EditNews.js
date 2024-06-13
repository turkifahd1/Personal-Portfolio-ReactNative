import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

export default function ProjectDetail() {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState({ projectName: '', description: '', projectLink: '', images: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ projectName: '', description: '', projectLink: '', images: '' });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setFormData({ projectName: data.projectName, description: data.description, projectLink: data.projectLink, images: data.images });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      setData(formData);
      setIsEditing(false);
      Alert.alert('Success', 'تم تحديث البيانات بنجاح!');
    } catch (error) {
      console.error('Error updating data:', error);
      Alert.alert('Error', 'حدثت مشكلة أثناء تحديث البيانات. يرجى المحاولة مرة أخرى!');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://node-js-backend-personal-portfolio.onrender.com/api/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFormData({
        ...formData,
        images: result.uri,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-1 p-5 mt-10`}>
      <View style={tw`mt-5 p-3 bg-gray-200 rounded-lg`}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="عنوان المشروع"
              value={formData.projectName}
              onChangeText={(value) => handleChange('projectName', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="وصف المشروع"
              value={formData.description}
              onChangeText={(value) => handleChange('description', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="رابط المشروع"
              value={formData.projectLink}
              onChangeText={(value) => handleChange('projectLink', value)}
            />
            <TouchableOpacity onPress={pickImage} style={tw`p-2 rounded-md bg-gray-300`}>
              <Text style={tw`text-center`}>اختر صورة</Text>
            </TouchableOpacity>
            {formData.images ? (
              <Image source={{ uri: formData.images }} style={styles.image} />
            ) : null}
          </>
        ) : (
          <>
            {data.images ? <Image source={{ uri: data.images }} style={styles.image} /> : null}
            <Text style={tw`text-lg font-bold`}>{data.projectName}</Text>
            <Text>{data.description}</Text>
            <Text style={tw`text-blue-500`} onPress={() => Linking.openURL(data.projectLink)}>
              الرابط: {data.projectLink}
            </Text>
          </>
        )}
        <View style={tw`flex-row justify-between mt-2`}>
          {isEditing ? (
            loading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <TouchableOpacity
                onPress={handleSave}
                style={tw`p-2 rounded-md bg-blue-500`}
              >
                <Text style={tw`text-white font-bold`}>حفظ التغييرات</Text>
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity
              onPress={handleEdit}
              style={tw`p-2 rounded-md bg-blue-500`}
            >
              <Text style={tw`text-white font-bold`}>تعديل العنوان والخبر</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleDelete}
            style={tw`p-2 rounded-md bg-red-500`}
          >
            <Text style={tw`text-white font-bold`}>حذف</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
