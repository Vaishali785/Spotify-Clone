import React from 'react'
import IMAGES from '../../../assets/images';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { SvgIcon } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';
import home from '../../../pages/Home/Home.module.css';
import Card from '../../UI/Card/Card';
import SidebarPlaylists from './SidebarPlaylists';


export default function Sidebar() {

    const icons = [{ "name": "Home", "url": "/", "icon": HomeRoundedIcon },
    { "name": "Search", "url": "/search", "icon": SearchRoundedIcon },
        // { "name": "Your Library", "url": "/your-library", "icon": QueueMusicRoundedIcon },
    ]


    return (
        <div className={`${classes.sidebar} ${home['home-grid__sidebar']}`}>
            <div className={classes["sidebar-logo"]}>
                <img src={IMAGES.spotifyLogoImg} alt="Spotify logo" />
            </div>
            <Card className={``}>
                <ul className={classes['sidebar-nav']}>
                    {icons.map(icon => (
                        <li className={classes["sidebar-nav__list"]} key={icon.url}>
                            <NavLink end to={icon.url} className={(({ isActive }) => isActive ? `${classes['sidebar-nav__link']} ${classes['active']}` : classes['sidebar-nav__link'])}>
                                <SvgIcon component={icon.icon} className={classes['sidebar-nav__listIcon']} />
                                <span className={classes['sidebar-nav__text']}>
                                    {icon.name}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Card>


            <Card className={`${classes["sidebar-playlists"]}`}>
                <strong className={classes["sidebar-playlists__title"]}>PLAYLISTS</strong>
                <hr className={classes["sidebar-playlists__border"]} />
                <SidebarPlaylists />
            </Card>

        </div>

    );
}