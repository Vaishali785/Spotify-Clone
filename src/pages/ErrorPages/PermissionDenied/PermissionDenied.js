import React from 'react';
import classes from './PermissionDenied.module.css';

function PermissionDenied() {
    const handleLogOut = () => {
        console.log("click");
        console.log(localStorage.getItem("time"));

        sessionStorage.removeItem("time");
        sessionStorage.removeItem("code");
        sessionStorage.removeItem("refresh");
        sessionStorage.removeItem("lastPlayed");
        window.location.pathname = '';
        console.log(window.location);
        // window.location.reload();
    }
    return (
        <div className={classes['permission-bg']}>
            {/* <div className={classes['permission-bg']} /> */}
            <div className={classes['permission-modal']}>
                <div className={classes['permission-content']}>
                    <h2 className={classes['permission-text']}>Permission Denied!</h2>
                    {/* <hr /> */}
                    <p className={classes['permission-sub-text']}> Access to this resource is restricted. You don't have the necessary permissions to access this page. </p>
                </div>
                <button className={classes['permission-btn']} onClick={handleLogOut}>Login Again</button>
            </div>
        </div>
    )
}

export default PermissionDenied