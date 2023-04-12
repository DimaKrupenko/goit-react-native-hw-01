import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { authSlice } from './authReducer';

initializeApp(firebaseConfig);

const auth = getAuth();
const authSignUpUser =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    // console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
        });
        // console.log(user.displayName);

        const { uid, displayName } = user;
        // console.log(uid, displayName);

        dispatch(
          authSlice.actions.updateUserProfile({
            userId: uid,
            nickName: displayName,
          })
        );
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

const authStateChangeUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        console.log(email);

        if (user) {
          dispatch(
            authSlice.actions.updateUserProfile({
              userId: user.uid,
              nickName: user.displayName,
            })
          );
          dispatch(authSlice.actions.authStateChange({ stateChange: true }));
        }
        // const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

export { authSignInUser, authSignUpUser, authSignOutUser, authStateChangeUser };
