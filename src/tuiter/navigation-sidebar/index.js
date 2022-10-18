import React from "react";
import { Twitter } from 'react-bootstrap-icons';
import { HouseDoorFill } from 'react-bootstrap-icons';
import { Hash } from 'react-bootstrap-icons';
import {BellFill} from "react-bootstrap-icons";
import {EnvelopeFill} from "react-bootstrap-icons";
import {BookmarkFill} from "react-bootstrap-icons";
import {ListUl} from "react-bootstrap-icons";
import {PersonFill} from "react-bootstrap-icons";
import {ChatDotsFill} from "react-bootstrap-icons";

import "./index.css";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <Twitter className = "wd-tuiter-icon" color="royalblue" size={35} />

            <a href = {'../../../public/tuiter/home.html'} className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="wd-float-left me-2"><HouseDoorFill className = "wd-house" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none">Home </span> </a>


            <a href = {'../../../public/tuiter/explore/index.html'} className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="wd-float-left me-2"><Hash className = "wd-hash" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Explore </span> </a>
            <a href = {'../../../public/tuiter/notifications.html'} className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="wd-float-left me-2"><BellFill className = "wd-notif" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Notifications </span> </a>

            <a href = {'../../../public/tuiter/messages.html'} className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="wd-float-left me-2"><EnvelopeFill className = "wd-message" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Messages </span> </a>

            <a href = {'../../../public/tuiter/bookmarks.html'} className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="wd-float-left me-2"><BookmarkFill className = "wd-book" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Bookmarks </span> </a>

            <a href = {'../../../public/tuiter/lists.html'} className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="wd-float-left me-2"><ListUl className = "wd-list" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Lists </span> </a>

            <a href = {'../../../public/tuiter/profile.html'} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="wd-float-left me-2"><PersonFill className = "wd-profile" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> Profile </span> </a>

            <a href = {'../../../public/tuiter/more.html'} className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="wd-float-left me-2"><ChatDotsFill className = "wd-more" color="black" size={25} />
                </div>
                <span className="text-break d-none d-xxl-block d-xl-block d-lg-none"> More </span> </a>

        </div>
    );
};
export default NavigationSidebar;
