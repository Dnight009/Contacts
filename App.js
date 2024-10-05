import "react-native-gesture-handler"
import {PaperProvider, Text } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./Router/Mysack";
import "@react-native-firebase/auth";

const App = () => {  
  return (
    <NavigationContainer>
      <PaperProvider>
        <HomeStackNavigator/> 
      </PaperProvider>    
    </NavigationContainer>
  )
}
export default  App;

