import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useRoute from '../router';
import { useSelector, useDispatch } from 'react-redux';
import { authStateChangeUser } from '../redux/auth/authOperations';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Main = () => {
  //   const auth = getAuth();
  //   const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { stateChange } = useSelector(state => state.auth);
  //   console.log(state);


  useEffect(() => {
    console.log(stateChange);
    dispatch(authStateChangeUser());
    console.log(stateChange);
    console.log(email, password);
  }, []);

  //   onAuthStateChanged(auth, user => setUser(user));
  //   console.log(user);

  const routing = useRoute(stateChange);

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
};

export default Main;
