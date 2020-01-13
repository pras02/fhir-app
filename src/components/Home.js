import React from "react";
import FhirClientProvider from "./FhirClientProvider";
import Chart from "./Chart";
import Patient from "./Patient";

/**
 * Wraps everything into `FhirClientProvider` so that any component
 * can have access to the fhir client through the context.
 */
const Page = () => {
  return (
    <FhirClientProvider>
      <Patient />
      <hr />
      <Chart />
      <br />
    </FhirClientProvider>
  );
};

export default Page;
