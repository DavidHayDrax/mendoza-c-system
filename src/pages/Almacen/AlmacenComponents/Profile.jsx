import React from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.email}</h2>
        <JSONPretty data={user}/> 
    </div>
    )
  );
};

export default Profile;
