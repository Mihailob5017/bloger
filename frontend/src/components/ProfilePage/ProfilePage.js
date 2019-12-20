import React, { useEffect, useContext } from "react";
import contextValue from "../../context API/Context";

//COMPONENTS
import NotLoggedIn from "../HomePage/NotLoggedIn";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  const context = useContext(contextValue);

  useEffect(() => {
    context.getUser();
  }, []);

  return (
    <div style={{ marginTop: "4em" }} className="container">
      {context.isUserAuthenticated ? (
        <>
          <ProfileCard user={context.user} />
        </>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
};

export default ProfilePage;
