import React, { useState } from "react";
import "./style.scss";

const Profile = ({ user, logout }: { user: string, logout: any }) => {
  const [isOpen, setStatus] = useState(false);
  return (
    <div className="user" onClick={() => setStatus(!isOpen)}>
      {user}
      {isOpen ? <div className="logout" onClick={logout}>logout</div> : null}
    </div>
  );
};

export default Profile;
