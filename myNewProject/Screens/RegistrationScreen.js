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
        <View style={styles.form}>
          <Text style={styles.formText}>Регистрация</Text>
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Логин"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            secureTextEntry={true}
            placeholder="Пароль"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TouchableOpacity style={styles.button} onPress={onRegistration}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
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
    justifyContent: 'flex-end',
    // width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  form: {
    marginHorizontal: 30,
    // flex: 1,

    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    width: 375,
    height: 549,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formText: {
    color: '#fffff',
    marginBottom: 33,
    fontSize: 30,
  },
  button: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    gap: 12,
    padding: 16,
    // height: 50,
    width: 343,
    borderRadius: 100,
    marginTop: 47,
  },
  input: {
    width: 343,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    borderRadius: 10,
  },
  btnTitle: {
    fontSize: 18,
  },
});

export default RegistrationScreen;
