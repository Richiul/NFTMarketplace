import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
};



const App = () => {
  const [loaded] = useFonts({
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!loaded) return null;

  return (
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home">
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
