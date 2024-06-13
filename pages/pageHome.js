import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Image, Text, Button } from 'react-native-elements';
import Header from '../componet/header';
import tw from 'twrnc';

const project = [

  {
    id: 2,
    title: 'اخر المشاريع الجديدة  ',
    image: require('../assets/image/th (1).jpeg'), 
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <Header />
      <ScrollView style={tw`p-2 mt-10`}>
        {project.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('News', { id: item.id })}
          >
            <Card containerStyle={tw`mb-5 rounded-lg`}>
              <Image source={item.image} style={tw`h-50`} />
              <Text style={tw`text-xl font-bold mb-2`}>{item.title}</Text>
              <Button
                title="قراءة المزيد"
                type="outline"
                buttonStyle={tw`mt-2 border-blue-500 rounded-md`}
                titleStyle={tw`text-blue-500`}
                onPress={() => navigation.navigate('News', { id: item.id })}
              />
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('News')}>
        <Text style={tw`mt-5 text-center text-blue-500 text-xl underline`}>اخر الغات الحديثه</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default HomeScreen;




























// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
// import Header from '../componet/header';

// const images = [
//   'https://cdn.pixabay.com/photo/2024/05/22/06/46/ai-generated-8779824_640.jpg',
//   'https://cdn.pixabay.com/photo/2024/05/22/16/37/seagull-8781110_640.jpg',
//   'https://cdn.pixabay.com/photo/2024/05/22/06/46/ai-generated-8779824_640.jpg',
  
// ];

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

// const HomeScreen = ({ navigation }) => {
//   const [imgActive, setimgActive] = useState(0);

//   const onChange = (nativeEvent) => {
//     if (nativeEvent) {
//       const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
//       if (slide !== imgActive) {
//         setimgActive(slide);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.imageContainer}>
//         <ScrollView
//           onScroll={({ nativeEvent }) => onChange(nativeEvent)}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           horizontal
//           style={styles.scrollView}
//         >
//           {images.map((url, index) => (
//             <Image key={url} resizeMode="stretch" style={styles.image} source={{ uri: url }} />
//           ))}
//         </ScrollView>
//         <View style={styles.dotContainer}>
//           {images.map((_, index) => (
//             <Text key={index} style={index === imgActive ? styles.dotActive : styles.dot}>
//               ●
//             </Text>
//           ))}
//         </View>
//       </View>
//       <TouchableOpacity onPress={() => navigation.navigate('News')}>
//         <Text style={styles.link}>اخر الأخبار</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ExchangeRates')}>
//         <Text style={styles.link}>اخر صرف العملات</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageContainer: {
//     marginTop: 60,
//     borderRadius: 40,
//   },
//   scrollView: {
//     width: WIDTH,
//     height: HEIGHT * 0.25,
//   },
//   image: {
//     width: WIDTH,
//     height: HEIGHT * 0.25,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   dotContainer: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   dotActive: {
//     margin: 3,
//     color: 'black',
//   },
//   dot: {
//     margin: 3,
//     color: 'white',
//   },
//   link: {
//     marginTop: 20,
//     alignSelf: 'center',
//     color: 'blue',
//     fontSize: 20,
//     textDecorationLine: 'underline',
//   },
// });

// export default HomeScreen;