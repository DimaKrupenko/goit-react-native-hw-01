import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { getAuth } from 'firebase/auth';

export default function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
