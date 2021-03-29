import React, {useEffect} from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/appSlice';
import Login from './components/Login';
import {auth} from './firebase';

function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(login({
                    username: authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid,
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [auth])

    return (
        <div className='app'>
            <Router>
                {
                    !user ? (
                        <Login />
                    ): (
                        <>
                            <img
                                className='app__logo'
                                src='https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg'
                                alt='Snapchat'
                            />

                            <div className='app__body'>
                                <div className='body__Background'>
                                    <Switch>
                                        <Route path='/chats/view'>
                                            <ChatView />
                                        </Route>

                                        <Route path='/chats'>
                                            <Chats />
                                        </Route>

                                        <Route path='/preview'>
                                            <Preview />
                                        </Route>

                                        <Route exact path='/'>
                                            <WebcamCapture />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </>
                    )
                }
            </Router>
        </div>
    );
}

export default App;
