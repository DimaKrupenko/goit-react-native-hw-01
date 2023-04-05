// import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/config';

const auth = getAuth();
const authSignUpUser =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    // console.log(name, email, password);
    await createUserWithEmailAndPassword(auth, name, email, password)
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
