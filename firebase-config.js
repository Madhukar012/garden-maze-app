// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWgST7zwFxmN0t7HVPdif32jQ5QHWhjoQ",
  authDomain: "garden-maze-app.firebaseapp.com",
  projectId: "garden-maze-app",
  storageBucket: "garden-maze-app.firebasestorage.app",
  messagingSenderId: "675656065635",
  appId: "1:675656065635:web:8e676b544f73ea4bdf4e56",
  measurementId: "G-JN7ZJKKF0Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make services available globally
const auth = firebase.auth();
const db   = firebase.firestore();

console.log("Firebase connected successfully!");