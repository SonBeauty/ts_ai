import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const SignUpPage = () => {
  const { setUser } = useContext(UserContext);
  const onSuccess = (res) => {
    setUser({ data: res.profileObj, token: res.tokenId });
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
    <GoogleLogin
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"none"}
      clientId={clientId}
      isSignedIn={true}
    />
  );
};

export default SignUpPage;
