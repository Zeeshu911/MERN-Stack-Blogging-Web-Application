import React, { useContext } from "react";
import { Context } from "../../main";

const MyProfile = () => {
  const { user } = useContext(Context);
  return (
    <section className="profile">
      <div className="avatar">
        <img src="/pic.jpg" alt="avatar" />
      </div>
      <div className="user-detail">
        <p>
          Name: <span>{user.name}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Phone: <span>{user.phone}</span>
        </p>
        <p>
          Role: <span>{user.role}</span>
        </p>
      </div>
    </section>
  );
};

export default MyProfile;
