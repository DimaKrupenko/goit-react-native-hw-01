// import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from '../../firebase/config';

const authSignUpUser =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    console.log(name, email, password);
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

const authSignInUser = () => async (dispatch, getState) => {};

const authSignOutUser = () => async (dispatch, getState) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };