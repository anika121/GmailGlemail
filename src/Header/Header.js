import React from 'react';
import './Header.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Avatar, IconButton} from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuRoundedIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            </div>

            <div className="header__middle">
                <SearchRoundedIcon />
                <input type="text" placeholder="Search Mail" />
                <ArrowDropDownIcon className="header_inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header;