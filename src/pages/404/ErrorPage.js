import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>404Page</div>
    )
}

export default ErrorPage