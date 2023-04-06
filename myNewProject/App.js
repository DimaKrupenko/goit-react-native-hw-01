import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => setUser(user));

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
