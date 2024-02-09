import React from 'react';
import classes from './HoverableCard.module.css';
import { Link } from 'react-router-dom';

const HoverableCard = (props) => {
    return (
        <div className={`${classes['hover-card']} ${props.className ? props.className : ''}`}>
            <Link to={props.link} className='no-underline'>
                {props.children}
            </Link>
        </div>
    )
}

export default HoverableCard