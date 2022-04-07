import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { Icon, IconButton, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './Sidebar.css'
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import Switch from './switch';

function Sidebar() {
    return (
        <div className="sidebar">
            
                <h2>skateboard</h2>
                <div className="sidebar__menu">
                    <h4>MENU</h4>
                    <IconButton className="home">
                        <HomeIcon/>
                        Discover
                    </IconButton>

                    <IconButton className="home">
                        <TrendingUpIcon/>
                        Trending
                    </IconButton>

                    <IconButton className="home">
                        <ViewStreamIcon/>
                        Streaming
                    </IconButton>

                    <IconButton className="home">
                        <PlaylistPlayIcon/>
                        PLaylist
                    </IconButton>

                    <IconButton className="home">
                        <BookmarksIcon/>
                        Bookmark
                    </IconButton>
                </div>
                <div className="sidebar__catagory">
                    <h4>CATEGORY</h4>
                    <IconButton className="home">
                        <HomeIcon/>
                        Live Stream
                    </IconButton>

                    <IconButton className="home">
                        <TrendingUpIcon/>
                        Tutorial
                    </IconButton>

                    <IconButton className="home">
                        <ViewStreamIcon/>
                        Competition
                    </IconButton>

                    <IconButton className="home">
                        <ChromeReaderModeIcon/>
                        Community
                    </IconButton>

                </div>
                <div className="toggle__button">
                    <Switch/>
                </div>
        </div>
    )
}

export default Sidebar
