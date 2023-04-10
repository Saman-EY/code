import React from 'react';
import firebase from "firebase/app"
import { auth } from '../Firebase';
// style
import styles from '../styles/Login.module.css';

import img from "../assets/google.svg"


const Login = () => {
    return (
        <section className={styles.Maincontainer}>
            <div className={styles.Boxcontainer}>
                <h3>Welcome to Botogram !</h3>
                <button type={'button'} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} >
                    <img src={img} alt="logo" />
                    <p>Sign in with Google</p>
                </button>
            </div>
        </section>
    );
};

export default Login;
