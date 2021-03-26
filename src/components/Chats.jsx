import React, {useEffect, useState} from 'react';
import '../css/Chats.css';
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {auth, db} from '../firebase';
import Chat from '../components/Chat';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/appSlice';

function Chats() {

    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setPosts(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))))
    }, [])

    return (
        <div className='chats'>
            <div className='chats__header'>
                <Avatar
                    src={user.profilePic}
                    className='chats__avatar'
                    onClick={() => auth.signOut()}
                />

                <div className='chats__search'>
                    <SearchIcon />

                    <input type='text' placeholder='Friends' />
                </div>

                <ChatBubbleIcon className='chats__chatIcon' />
            </div>

            <div className='chats__posts'>
                {
                    posts.map(({id, data: { profilePic, username, timestamp, imageUrl, read },}) => (
                        <Chat
                            key={id}
                            id={id}
                            username={username}
                            timestamp={timestamp}
                            imageUrl={imageUrl}
                            read={read}
                            profilePic={profilePic}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Chats;
