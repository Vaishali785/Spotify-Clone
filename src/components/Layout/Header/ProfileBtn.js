import React, { useEffect } from 'react'
import useSendHttpRequest from '../../../hooks/sendHttpReq';
import { getUser } from '../../../utilities/data/SpotifyApiCalls';
import classes from './ProfileBtn.module.css';
import { Avatar } from '@mui/material';

const ProfileBtn = ({ showLogOut, setShowLogOut }) => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    useEffect(() => {
        const config = {
            url: getUser(),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction])
    // console.log(response);
    return (
        <>
            {isLoading
                ?
                <>
                    <div className={`${showLogOut ? classes['hide-content'] : classes['skeleton-header-profile-btn__img']}`} />
                    <span className={`${classes["skeleton-header-profile-btn__name"]} skeleton-bg`}>
                    </span>
                </>
                :
                <div className={classes['profile-btn-wrap']} onClick={() => setShowLogOut(prevState => !prevState)}>
                    {response?.images[0]?.url
                        ?
                        <img src={response?.images[0]?.url} alt="" className={`${showLogOut ? classes['hide-content'] : classes['header-profile-btn__img']}`} />
                        :
                        <Avatar src="/broken-image.jpg" className={!showLogOut ? classes['header-profile-btn__img'] : classes['hide-content']} />
                    }
                    <span className={`${showLogOut ? classes['hide-content'] : classes["header-profile-btn__name"]}`}>
                        {response && response?.display_name}
                    </span>
                </div >

            }

        </>
    )
}

export default ProfileBtn