import React from 'react'
import './MainBody.css'
import { Avatar } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

function MainBody() {
    return (
        <div className="main__body">
            <div className="main__header">
                <input className="search__bar" type="text" placeholder="Search"/>

                <div className="header__right">
                    <Avatar src="/avatar__1.jpg"/>
                    <select name="" id="" className="drop__down">
                        <option value="" className="dropdown__content">Thomas</option>
                        <option value="" className="dropdown__content">Richard</option>
                        <option value="" className="dropdown__content">Charlotte</option>
                        <option value="" className="dropdown__content">Tony</option>
                    </select>
                    <div>
                    <Badge className="bell__icon" variant="dot" color="primary">
                        <NotificationsIcon />
                    </Badge>
                    </div>
                </div>
            </div>
            <h1 className="main__heading">Discover</h1>
            <div className="main__content">
            <div className="main__contentLeft">
                
            </div>
            <div className="main__contentRight">
                
            </div>
            </div>
            <h1 className="main__heading">Most Watched</h1>
            <div className="main__cards">
                
                <div className="card__div">
                    <div className="image__div div__1"></div>
                    <div className="card__header">
                    <h5>Thomas</h5>
                    <Avatar src="/avatar__1.jpg" className="avatar"/>
                    </div>
                    <div className="card__content">
                        <h4>
                            Basic how to ride your 
                            skateboard comfortly
                        </h4>
                    </div>
                    
                </div>
                <div className="card__div">
                    <div className="image__div div__2"></div>
                    <div className="card__header">
                    <h5>Richard</h5>
                    <Avatar src="/avatar__2.jpg" className="avatar"/>
                    </div>
                    <div className="card__content">
                        <h4>
                            Prepare for your first
                            skateboard jump
                        </h4>
                    </div>
                </div>
                <div className="card__div">
                    <div className="image__div div__3"></div>
                    <div className="card__header">
                    <h5>Charlotte</h5>
                    <Avatar src="/avatar__3.jpg" className="avatar"/>
                    </div>
                    <div className="card__content">
                        <h4>
                            Tops to playing
                            skateboard on the ramp
                        </h4>
                    </div>
                </div>
                <div className="card__div">
                    <div className="image__div div__4"></div>
                    <div className="card__header">
                    <h5>Tony</h5>
                    <Avatar src="/avatar__4.jpg" className="avatar"/>
                    </div>
                    <div className="card__content">
                        <h4>Skateboard tricks that 
                            look impossible
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody
