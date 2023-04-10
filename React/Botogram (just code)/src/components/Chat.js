import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
// components
import Navbar from './Navbar';
// style
import styles from '../styles/Chat.module.css';
// context
import { AuthContext } from '../context/AuthContextProvider';
import axios from 'axios';

const Chat = () => {
    let user = useContext(AuthContext);
    let [loading, setloading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }

        axios
            .get('url', {
                headers: {
                    'project-id': '1212121212',
                    'user-name': user.email,
                    'user-secret': user.uid
                }
            })
            .then(() => {
                setloading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);
                getFile(user.PhotoURL)
                .then((avatar) => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("url", formdata, {
                        headers: {
                            "private-key": "12121223123",
                        }
                    })
                    .then(() => setloading(false))
                    .catch((error) => console.log(error))
                })
            });
    }, [user, history]);

    let logoutHandler = async () => {
        await auth.signOut();
        history.push('/');
    };


    let getFile = async (url) => {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "photo.jpg", {type: "image/jpeg"})
    }


    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh - 70px)"
                projectID="45047414-cea3-4c82-9f36-dc9bf6110d46"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chat;
