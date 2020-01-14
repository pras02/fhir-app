import { useEffect } from "react";
import { oauth2 as SMART } from "fhirclient";

const Launcher = () => {
  useEffect(() => {
    SMART.authorize({
      clientId: "my-client-id",
      scope: "launch launch/patient patient/read offline_access",
      redirectUri: "./app",

      iss: "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSJ9/fhir"

      // iss:
      //   "https://launch.smarthealthit.org/v/r3/sim/" +
      //   "eyJoIjoiMSIsImIiOiJmMDQ2MjkzNi1lYjRiLTRkYT" +
      //   "EtYjQ1YS1mYmQ5NmViZjhjY2IiLCJlIjoic21hcnQt" +
      //   "UHJhY3RpdGlvbmVyLTcxNjE0NTAyIn0/fhir"
    });
  });
  return "Launching...";
};

export default Launcher;
