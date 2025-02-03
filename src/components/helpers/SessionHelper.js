import {Redirect} from "react-router";
import jwt_decode from "jwt-decode";

// LocalStorage entries:
// bem_ZGF0YQ: encrypted user data
// bem_dG9rZW4: user token
// bem_ZXhwaXJl: session expiring timestamp

const invalidateSession = () => sessionStorage.clear();

const setUserData = (userData, token) => {
  const exp = jwt_decode(token).exp
  
  sessionStorage.setItem("bem_ZGF0YQ", btoa(JSON.stringify(userData)));
  sessionStorage.setItem("bem_dG9rZW4", token);
  sessionStorage.setItem("bem_ZXhwaXJl", exp);
};

const getUser = () => {
  if (sessionStorage.getItem("bem_dG9rZW4") == null) {
    return {};
  } else if (Date.now() > sessionStorage.getItem("bem_ZXhwaXJl") * 1000) {
    alert("Your session is expired. Please login again.");
    invalidateSession();
    return {};
  } else {
    try {
      let decoded = atob(sessionStorage.getItem("bem_ZGF0YQ"))
      return JSON.parse(decoded);
    } catch (e) {
      return {};
    }
  }
};

const getUserData = getUser();

const getToken = sessionStorage.getItem("bem_dG9rZW4");

const CheckUser = ({forLoggedOut = false, redirect = false, children = null, pathname = ""}) => {
  let hasToken = sessionStorage.getItem("bem_dG9rZW4")
    && sessionStorage.getItem("bem_ZGF0YQ")
    && Date.now() < sessionStorage.getItem("bem_ZXhwaXJl") * 1000;
  
  // Only show for logged in user
  if (!forLoggedOut && !hasToken) {
    if (redirect) {
      invalidateSession();
      return <Redirect to={pathname+"/login"}/>;
    }
    return null;
  }
  // Only show for logged out user (w/ forLoggedOut=true)
  else if (forLoggedOut && hasToken) {
    if (redirect) return <Redirect to={pathname+"/form"}/>;
    return null;
  }
  if (children) return children;
  return null;
};

export {setUserData, getUserData, getToken, invalidateSession, CheckUser};
