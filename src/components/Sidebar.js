import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => {
       return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        ) 
    }


  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1588420343618-6141b3784bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">#</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Posts</p>
          <p className="sidebar__statNumber">#</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('frontend')}
        {recentItem('lambda')}
        {recentItem('codingChimp')}
      </div>
    </div>
  );
}

export default Sidebar;
