import React, {useEffect} from 'react';
import '../css/ChatView.css';
import {useSelector} from 'react-redux';
import {selectSelectedImage} from '../features/appSlice';
import {useHistory} from 'react-router';

function ChatView() {

    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();

    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage])

    const exit = () => {
        history.replace('/chats');
    }

    return (
        <div className='chatView'>
            <img onClick={exit} src={selectedImage} alt=''/>
        </div>
    );
}

export default ChatView;
