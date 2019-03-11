import firebase from "firebase";

export const config = {
    apiKey: "AIzaSyCvIVGirCYCMFjp3hkJ1sQPsOAB0yMkkyo",
    authDomain: "dashkart-2d777.firebaseapp.com",
    databaseURL: "https://dashkart-2d777.firebaseio.com",
    projectId: "dashkart-2d777",
    storageBucket: "",
    messagingSenderId: "128689006225"
  };

  export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token', token);
      return token;
    } catch (error) {
      console.error(error);
    }
  }