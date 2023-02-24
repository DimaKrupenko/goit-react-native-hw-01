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
  TouchableOpacity,
} from 'react-native';

// const InitialState = {
//   email: '',
//   password: '',
// };

const LoginScreen = () => {
  //   const [user, setUser] = useState(InitialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);
  const onRegistration = () => {
    console.log('email:', email, 'password:', password);
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setEmail('');
    setPassword('');
    // setUser(InitialState);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View
            // style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
            style={styles.form}
          >
            <Text style={styles.formText}>Войти</Text>
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Адрес элекстронной почты"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}

              // onChange={value =>
              //   setUser(prevState => ({ ...prevState, email: value }))
              // }
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={true}
              placeholder="Пароль"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}

              // onChange={value =>
              //   setUser(prevState => ({ ...prevState, password: value }))
              // }
            />
            <TouchableOpacity style={styles.button} onPress={onRegistration}>
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  form: {
    marginHorizontal: 40,
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
});

export default LoginScreen;
