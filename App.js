// App.js
import  React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';


import MyTabs from './pages/tab/Tab';




export default function App() {
  

  
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>


  );
}
