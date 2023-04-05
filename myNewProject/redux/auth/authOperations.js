// import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase/config';

initializeApp(firebaseConfig);

const auth = getAuth();
const authSignUpUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
// const authSignUpUser =
//   ({ name, email, password }) =>
//   async (dispatch, getState) => {
//     console.log(name, email, password);

//     try {
//       const user = await app
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

const authSignInUser = () => async (dispatch, getState) => {};

const authSignOutUser = () => async (dispatch, getState) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };
