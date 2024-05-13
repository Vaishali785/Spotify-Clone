import React from 'react';
import classes from './Error404.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Layout/Header/Header';

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes['error_status']}> 404</div>
            <p style={{ textAlign: "center" }}>Page Not Found! </p>
            <div className={classes['error-btns-wrap']}>
                {/* <button className={classes['error-back-btn']} onClick={() => navigate(-1)}>Back</button> */}
                <button className={classes['error-home-btn']} onClick={() => navigate('/')}>Go back to Home</button>
            </div>
        </div>
    )
}

export default Error404