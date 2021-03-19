import React, {useEffect} from 'react';
import '../css/Preview.css';
import {useDispatch, useSelector} from 'react-redux';
import {resetCameraImage, selectCameraImage, setCameraImage} from '../features/cameraSlice';
import {useHistory} from 'react-router';
import CloseIcon from '@material-ui/icons/Close';

function Preview() {

    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replace('/');
        }
    }, [cameraImage, history])

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

    return (
        <div className='preview'>
            <CloseIcon onClick={closePreview} className='preview__close' />

            <div className='preview__toolbarRight'>

            </div>

            <img src={cameraImage} alt=''/>
        </div>
    );
}

export default Preview;
