import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function FacebookLoginComponent() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    localStorage.setItem("fbimage", response.picture.data.url);
    localStorage.setItem("name", response.name);
    localStorage.setItem("email", response.email);
    localStorage.setItem("fbid", response.userID);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };

  return (
    <div className="container">
      {!login && (
        <FacebookLogin
          appId="5897811026940152"
          // appId="1524452528381332"
          autoLoad={false}
          fields="name,email,picture"
          // scope="public_profile,email,user_friends"
          scope="public_profile,user_friends,user_actions.books"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      )}

      {login && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={picture} alt="Profile" />
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Email ID: {data.email}</p>
            <a href="#" className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacebookLoginComponent;
