import React from 'react';
import classes from './NavMobile.module.css';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const NavMobile = () => {
    return (
        <div className={`${classes['mobile-menu']}`}>
            <ul className={`${classes['mobile-menu-list']}`}>
                <li className={`${classes['mobile-menu-list-item']}`}>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => isActive ?
                            `${classes['mobile-menu-list-item__link']} title ` :
                            `${classes['mobile-menu-list-item__link']} text-white-hover no-underline`}
                    >
                        {({ isActive }) => (
                            <div className={`${classes['mobile-menu-list-item__content']}`}>
                                <span className={`${classes['mobile-menu-list-item__text']}`}>Home</span>
                                <span className={`${classes['mobile-menu-list-item__icon']}`}>{isActive ? <HomeRoundedIcon /> : <HomeOutlinedIcon />}</span>
                            </div>
                        )
                        }
                    </NavLink>
                </li>
                <li className={`${classes['mobile-menu-list-item']}`}>
                    <NavLink end
                        to='/search'
                        className={({ isActive }) => isActive ?
                            `${classes['mobile-menu-list-item__link']} title ` :
                            `${classes['mobile-menu-list-item__link']} text-white-hover no-underline`}
                    >
                        {({ isActive }) => (
                            <div className={`${classes['mobile-menu-list-item__content']}`}>
                                <span className={`${classes['mobile-menu-list-item__text']}`}>Search</span>
                                <span className={`${classes['mobile-menu-list-item__icon']} ${isActive ? classes['mobile-menu-list-item__text-search'] : ''}`}><SearchRoundedIcon /></span>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className={`${classes['mobile-menu-list-item']}`}>
                    <NavLink
                        end
                        to='/library'
                        className={({ isActive }) => isActive ?
                            `${classes['mobile-menu-list-item__link']} title` :
                            `${classes['mobile-menu-list-item__link']} text-white-hover no-underline`}
                    >
                        {({ isActive }) => (
                            <div className={`${classes['mobile-menu-list-item__content']}`}>
                                <span className={`${classes['mobile-menu-list-item__text']}`}>Library</span>
                                <span className={`${classes['mobile-menu-list-item__icon']} ${isActive}`}>{isActive ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}</span>
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavMobile