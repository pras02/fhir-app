import { useEffect } from "react";
import { oauth2 as SMART } from "fhirclient";

const Launcher = () => {
  useEffect(() => {
    SMART.authorize({
      clientId: "my-client-id",
      scope: "launch launch/patient patient/read offline_access",
      redirectUri: "./app"
    });
  });
  return "Launching...";
};

export default Launcher;
