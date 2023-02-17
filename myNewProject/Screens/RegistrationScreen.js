import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  secureTextEntry,
} from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandler = text => setName(text);
  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);
  const onRegistration = () => {
    console.log('name:', name, 'email:', email, 'password:', password);
    Keyboard.dismiss();
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={nameHandler}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={emailHandler}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={passwordHandler}
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
      />
      <Button title={'Registration'} onPress={onRegistration} />
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

export default RegistrationScreen;
