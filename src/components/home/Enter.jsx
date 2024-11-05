import React from 'react'
import image from '../../assets/foto-center/fotologo.png';
import image2 from '../../assets/foto-center/gif.gif';

import './Enter.css'
import { Button, Stack } from '@mui/material';



const Enter = ({ onButtonClick }) => {







    return (
        <div className='home'>
            <div>

            <h1 className='wel'>Welcome!</h1>

            <img className='img_ittat' src={image} alt="###" />

            </div>
            <div>
                <img className='gif' src={image2} alt="gif" />

            </div>

            <Button className='button_end' variant="contained" onClick={onButtonClick} >Let's start</Button>

        </div>
    )
}

export default Enter
