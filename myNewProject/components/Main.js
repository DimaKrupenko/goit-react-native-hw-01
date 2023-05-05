import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from '../router';
import { useSelector, useDispatch } from 'react-redux';
import { authStateChangeUser } from '../redux/auth/authOperations';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Main = () => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [stateChange]);

  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
