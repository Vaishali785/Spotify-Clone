import React from 'react'
import Header from '../../components/Layout/Header/Header'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'
import classes from '../Home/Home.module.css';
import Footer from '../../components/Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotificationCard from '../../components/UI/NotificationCard/NotificationCard';

const HomeNavLayout = () => {
    const notification = useSelector(state => state.notification.showNotification);
    const notiContent = useSelector(state => state.notification.content);
    return (
        <>
            <div className={classes.home}>
                <Sidebar />
                <div className={classes["main-wrap"]}>
                    <Header />
                    <Outlet />
                </div>
                <Footer />
                <div className={classes['footer-adjustment']} />
            </div>
            {notification && <NotificationCard content={notiContent} />}
        </>
    )
}

export default HomeNavLayout