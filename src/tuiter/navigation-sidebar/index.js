import React from "react";
// import { Twitter } from 'react-bootstrap-icons';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a href = {'../../../public/tuiter/home.html'} className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            <a href = {'../../../public/tuiter/explore/index.html'} className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>
            <a href = {'../../../public/tuiter/notifications.html'} className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a href = {'../../../public/tuiter/messages.html'} className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a href = {'../../../public/tuiter/bookmarks.html'} className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a href = {'../../../public/tuiter/lists.html'} className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a href = {'../../../public/tuiter/profile.html'} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a href = {'../../../public/tuiter/more.html'} className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
