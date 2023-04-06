import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { authSlice } from './authReducer';

initializeApp(firebaseConfig);

const auth = getAuth();
const authSignUpUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    // console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(authSlice.actions.updateUserProfile({ userID: user.uid }));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

const authSignOutUser = () => async (dispatch, getState) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };
