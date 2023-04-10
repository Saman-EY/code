import firebase from 'firebase/app';
import 'firebase/auth';

export let auth = firebase.initializeApp({
    apiKey: 'AIzaSyC4mbTP4xzHmZFQbc_paX-qA40X--PU7Ik',
    authDomain: 'botogram-d303f.firebaseapp.com',
    projectId: 'botogram-d303f',
    storageBucket: 'botogram-d303f.appspot.com',
    messagingSenderId: '1048132055096',
    appId: '1:1048132055096:web:98e9302f72497df28436cd'
}).auth();
