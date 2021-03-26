import React from 'react';
import '../css/Login.css';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import {auth, provider} from '../firebase';
import {login} from '../features/appSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch(login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid,
                }))
            }).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://www.agconnect.nl/sites/ag/files/styles/article_main_image/public/snapchat.jpg?itok=BwRc3wTw'
                    alt='Snapchat Logo'
                />

                <Button onClick={signIn} variant='outlined'>
                    Sign In
                </Button>
            </div>
        </div>
    );
}

export default Login;
