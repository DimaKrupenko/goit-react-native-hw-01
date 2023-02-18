import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Keyboard,
  secureTextEntry,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const nameHandler = text => setName(text);
  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);

  const onRegistration = () => {
    console.log('name:', name, 'email:', email, 'password:', password);
    Keyboard.dismiss();
    setName('');
    setEmail('');
    setPassword('');
    setIsShowKeyboard(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <ImageBackground
          style={styles.image}
          source={require('../assets/images/background.jpg')}
        > */}
        {/* <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        > */}
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 20 : 100,
          }}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Name"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Email"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TouchableOpacity style={styles.button} onPress={onRegistration}>
            <Text style={styles.btnTitle}>Registration</Text>
          </TouchableOpacity>
        </View>
        {/* </KeyboardAvoidingView> */}
        {/* </ImageBackground> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    // width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  form: {
    // marginHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    padding: 10,
    height: 50,
    borderRadius: 30,
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
  btnTitle: {
    fontSize: 18,
  },
});

export default RegistrationScreen;
