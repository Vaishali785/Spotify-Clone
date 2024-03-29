import React from 'react'
import Error404 from '../ErrorPages/404/Error404';
import classes from './ErrorPage.module.css';


const ErrorPage = () => {
    // const error = useRouteError();

    return (
        <div>
            <div className={classes['error-page-wrap']}>
                <Error404 />
            </div>
        </div>
    )
}

export default ErrorPage