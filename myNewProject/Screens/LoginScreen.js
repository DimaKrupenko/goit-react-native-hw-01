import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  secureTextEntry,
} from 'react-native';

// const InitialState = {
//   email: '',
//   password: '',
// };

const LoginScreen = () => {
  //   const [user, setUser] = useState(InitialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);
  const onRegistration = () => {
    console.log('email:', email, 'password:', password);
    Keyboard.dismiss();
    // setUser(InitialState);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={emailHandler}
        placeholder="Email"
        style={styles.input}
        // onChange={value =>
        //   setUser(prevState => ({ ...prevState, email: value }))
        // }
      />
      <TextInput
        value={password}
        onChangeText={passwordHandler}
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        // onChange={value =>
        //   setUser(prevState => ({ ...prevState, password: value }))
        // }
      />
      <Button title={'Log In'} onPress={onRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default LoginScreen;
