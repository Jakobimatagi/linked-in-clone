import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch } from 'react-redux';
import { logout} from '../features/userSlice';
import { auth } from '../firebase';



function Header() {

    const dispatch = useDispatch()
    

    
    const logoutOfApp = () => {
        dispatch(logout())

        auth.signOut()
    }





    return (
        <div className="header">
            

            <div className="header__left">
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="logo" />
                
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messages' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />

                <HeaderOption avatar={true} onClick={logoutOfApp}  title="user"/>
            </div>
        </div>
    )
}

export default Header
