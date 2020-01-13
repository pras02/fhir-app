import React, { useState, useContext } from "react";
import { oauth2 as SMART } from "fhirclient";
import { FhirClientContext } from "../FhirClientContext";

const FhirClientProvider = props => {
  const context = useContext(FhirClientContext);

  const [client, setClient] = useState();
  const [error, setError] = useState();

  const handleClient = ({ client }) => {
    setClient(client);
  };

  const handleError = error => {
    setError(error);
  };

  return (
    <FhirClientContext.Provider
      value={{
        client: client,
        setClient: setClient
      }}
    >
      <FhirClientContext.Consumer>
        {({ client }) => {
          if (!client) {
            SMART.ready()
              .then(client => handleClient({ client }))
              .catch(error => handleError(error));
            return null;
          }
          return props.children;
        }}
      </FhirClientContext.Consumer>
    </FhirClientContext.Provider>
  );
};

export default FhirClientProvider;
