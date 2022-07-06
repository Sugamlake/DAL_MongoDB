//import { GoogleAuthProvider } from "firebase/auth";
// (function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // var firebaseConfig = {
  //   apiKey: "AIzaSyByjxt_YPAmr3HJ9jNCUGYiQkEc0BQ-sGQ",
  //   authDomain: "login-con-26709.firebaseapp.com",
  //   databaseURL: "",
  //   projectId: "login-con-26709",
  //   storageBucket: "login-con-26709.appspot.com",
  //   messagingSenderId: "1043836005416",
  //   appId: "1:1043836005416:web:25e6fdadc773292d5fd91d",
  // };
const firebaseConfig = {
  apiKey: "AIzaSyBF8EZflixQ-jOObH6I3Iut2i8BaZE2BvA",
  authDomain: "login-aa069.firebaseapp.com",
  projectId: "login-aa069",
  storageBucket: "login-aa069.appspot.com",
  messagingSenderId: "282389341295",
  appId: "1:282389341295:web:cd1c873d283f61c3e3599a"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

  // get elements
  // const email = document.getElementById("email");
  // const password = document.getElementById("password");
  // const login = document.getElementById("login");
  // const signup = document.getElementById("signup");
  // const logout = document.getElementById("logout");
  // const loggedInStatus = document.getElementById("loggedInStatus");
  // const googlelogin = document.getElementById("googlelogin");

//TODO: Add Google Sign in
const googleLogin = () => {
  console.log("google sign in clicked");

  // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
  // Hint: the user email address is in the results user object: result.user.email
  var provider = new firebase.auth.GoogleAuthProvider(app);
  let user = firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    return user
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  console.log(user);
  return user
};

// login
const emailLogin = (email,password) => {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(
    email,
    password
  );
  promise.catch((e) => console.log(e.message));
};

// signup
const signup = (email,password) => {
  // TODO: check for real email
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(
    email,
    password
  );
  promise.catch((e) => console.log(e.message));
};

// logout
const logout = () => {
  firebase.auth().signOut();
};

// login state
const loginState = () => {
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    let res;
    if (firebaseUser) {
      console.log(firebaseUser);
      res = true;
      return res
    } else {
      console.log("User is not logged in");
      res = false;
      return res
    }
  });
}
// })();

// const latino = /\w/;
// const diff = /\W/;
// if (latino.test("didi_m65") && !diff.test("didi_m65")) {
//   console.log("Bien")
// } else {
//   console.log("mal")
// };

// export {googleLogin,emailLogin,logout,signup};