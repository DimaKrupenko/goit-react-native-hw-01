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
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../redux/auth/authOperations';

const initialState = {
  name: '',
  email: '',
  password: '',
};
const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const onRegistration = () => {
    // console.log(state);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
    setIsShowKeyboard(false);
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
              <Text style={styles.formText}>Регистрация</Text>
              <TextInput
                value={state.name}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, name: value }))
                }
                placeholder="Логин"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={state.email}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, email: value }))
                }
                placeholder="Адрес электронной почты"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={state.password}
                onChangeText={value =>
                  setState(prevState => ({ ...prevState, password: value }))
                }
                secureTextEntry={true}
                placeholder="Пароль"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity style={styles.button} onPress={onRegistration}>
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Уже есть аккаунт? Войти</Text>
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
    // justifyContent: 'flex-end',
    width: '100%',
  },
  image: {
    // flex: 1,
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

export default RegistrationScreen;
