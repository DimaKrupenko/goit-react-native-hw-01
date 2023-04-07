import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from '../router';
import { useSelector } from 'react-redux';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Main = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  const state = useSelector(state => state);
  console.log(state);

  useEffect(() => {}, []);

  onAuthStateChanged(auth, user => setUser(user));

  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
