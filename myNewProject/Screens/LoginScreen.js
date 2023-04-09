import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Keyboard,
  Button,
  secureTextEntry,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { authSignInUser } from '../redux/auth/authOperations';

const InitialState = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState(InitialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // console.log('email:', user.email, 'password:', user.password);
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    dispatch(authSignInUser(user));
    setUser(InitialState);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/aa.png')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 10 : 0,
              }}
              // style={styles.form}
            >
              <Text style={styles.formText}>Войти</Text>
              <TextInput
                value={user.email}
                onChangeText={value =>
                  setUser(prevState => ({ ...prevState, email: value }))
                }
                placeholder="Адрес элекстронной почты"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={user.password}
                onChangeText={value =>
                  setUser(prevState => ({ ...prevState, password: value }))
                }
                secureTextEntry={true}
                placeholder="Пароль"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Нет аккаунта? Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  form: {
    // marginHorizontal: 30,
    // flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 395,
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

export default LoginScreen;
