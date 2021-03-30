import React from "react";
import "./Contact.css";



const user = {
  userName: "John Doe",
  userAvatar:
    "https://pbs.twimg.com/profile_images/3309741408/eff94615a3653c01a9d5a178ced7fbb5_400x400.jpeg",
  online: true
};

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={user.userAvatar} alt="avatar" />
      <div>
        <h3 className="name"> {user.userName} </h3>
        <div className="status">
          <div className={user.online ? "status-online" : "status-offline"}>
          </div>
          <p className="status-text">{user.online ? "online" : "offline"}</p>
        </div>
     </div>  
    </div>
  );
}

export default Contact;