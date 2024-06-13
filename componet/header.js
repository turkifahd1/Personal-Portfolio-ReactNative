import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import bbbb from '../assets/image/IMAGE.jpg';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.imagestyle} source={bbbb} />
          <View style={styles.textContainer}>
            <Text style={styles.channelName}>Turkish Channel</Text>
            <Text style={styles.subtitle}>For projects</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookmarkIcon}>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </TouchableOpacity>
      </View>
      {/* شريط البحث */}
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.textInput} placeholder='Search' />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#3498db", // لون الخلفية الجديد
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  imagestyle: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
  channelName: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    color: "white"
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    fontSize: 16,
  },
  searchBtn: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 10,
  },
  bookmarkIcon: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.3)", // لون زجاجي شفاف
  },
});

export default Header;
