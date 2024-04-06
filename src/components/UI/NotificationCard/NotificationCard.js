import React from 'react';
import classes from './NotificationCard.module.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const NotificationCard = (props) => {
    return (
        <>
            {
                <div className={`${classes['success-notification']}`}>
                    <CheckCircleRoundedIcon className={`${classes['success-notification__img']}`} />
                    <span>{props.content}</span>
                </div>
            }
        </>
    )
}

export default NotificationCard