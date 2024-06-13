import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pageHome'
import newsScreen from '../pageNews'
import EditNews from '../EditNews'
import NewsArticlePage from '../NewsArticlePage'
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
    
    }} >
      <Tab.Screen   name="Home" component={HomeScreen}
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            Home
          </Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home"  size={size} color={color} />
        )

        
      }} />
      <Tab.Screen name="News" component={newsScreen}
      
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            News
          </Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="newspaper-o" size={size} color={color} />
        )

        
      }}
      
      />
     <Tab.Screen name="EditNews" component={EditNews} 
      options={{
        tabBarVisible: false,
        tabBarButton: () => null,
      }}
      />
       <Tab.Screen name="NewsArticlePage" component={NewsArticlePage}
       options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            NewsArticlePage
          </Text>
        ),
        tabBarIcon:({color,size})=>(
        <FontAwesome name="edit" size={size} color={color} />        )

        
      }}
       
       />
    </Tab.Navigator>
  );
}




