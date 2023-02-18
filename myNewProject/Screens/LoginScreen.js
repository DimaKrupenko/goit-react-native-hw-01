import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  secureTextEntry,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
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
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Email"
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
              placeholder="Password"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}

              // onChange={value =>
              //   setUser(prevState => ({ ...prevState, password: value }))
              // }
            />
            <Button title={'Log In'} onPress={onRegistration} />
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
