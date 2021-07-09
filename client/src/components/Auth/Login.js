import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = (googleUser) => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log({ idToken });
  };

  return (
    <div>
      <GoogleLogin
        clientId="49826324425-806c996359vh8am9h3lf8qp91rrmttb7.apps.googleusercontent.com"
        onSuccess={onSuccess}
        isSignedIn={true}
      />
    </div>
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default withStyles(styles)(Login);
