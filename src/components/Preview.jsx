import React from 'react';
import '../css/Preview.css';
import {useSelector} from 'react-redux';
import {selectCameraImage} from '../features/cameraSlice';

function Preview() {

    const cameraImage = useSelector(selectCameraImage);

    return (
        <div className='preview'>
            <h1>
                PREVIEW
            </h1>

            <img src={cameraImage} alt=''/>
        </div>
    );
}

export default Preview;
