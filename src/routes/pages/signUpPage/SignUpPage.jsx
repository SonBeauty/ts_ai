import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
const SignUpPage = () => {
  const onSuccess = (res) => {
    console.log("success", res);
  };

  const clientId =
    "21469409463-nqpgg1osc8oeu7v4u5o2dtq6tkube51u.apps.googleusercontent.com";
  const onFailure = (res) => {
    console.log("fail", res);
  };

  const initializeGapi = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "",
    });
  };

  useEffect(() => {
    gapi.load("client:auth2", initializeGapi);
  });

  return (
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     console.log(credentialResponse);
    //   }}
    //   onError={(credentialResponse) => {
    //     console.log(credentialResponse);
    //   }}
    // />
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"none"}
      clientId={clientId}
      // buttonText="Login with Google"
      isSignedIn={true}
    />
  );
};

export default SignUpPage;
