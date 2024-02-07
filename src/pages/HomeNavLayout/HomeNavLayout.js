import React, { useEffect } from 'react'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'
import classes from '../Home/Home.module.css';
import Footer from '../../components/Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import useSendHttpRequest from '../../hooks/sendHttpReq';
import { getUserRecentlyPlayed } from '../../utilities/data/SpotifyApiCalls';
import { useSelector } from 'react-redux';

const HomeNavLayout = () => {
    const { isLoading, response, error, fetchFunction } = useSendHttpRequest();
    const startTime = useSelector(state => state.auth.time_token_generation);
    /**
     * functions are objects in JS and new object is created every time the function is re-executed even though it is the same object(function), this creates infinite loop here. 
     * So to avoid this infinite loop we are using useCallback in the custom hook. 
     */
    console.log(startTime)
    useEffect(() => {
        const config = {
            url: getUserRecentlyPlayed(1, startTime),
            method: "GET",
        }
        fetchFunction(config);
    }, [fetchFunction, startTime])
    console.log("current song")
    console.log(response);
    return (
        <div className={classes.home}>
            <Sidebar />
            <div className={classes["main-wrap"]}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomeNavLayout