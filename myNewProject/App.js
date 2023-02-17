import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        {/* <LoginScreen />
        <RegistrationScreen /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
