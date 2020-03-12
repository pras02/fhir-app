import React from "react";
import FhirClientProvider from "./FhirClientProvider";
import BloodPressureChart from "./BloodPressureChart";
import Patient from "./Patient";
import WeightChart from "./WeightChart";
import Allergies from "./Allergies";
import '../App.css'

/**
 * Wraps everything into `FhirClientProvider` so that any component
 * can have access to the fhir client through the context.
 */
const Page = () => {
  return (
    <FhirClientProvider>
      <Patient />
      <hr />
      <BloodPressureChart />
      <br />
      <WeightChart />
      <br />
    </FhirClientProvider>
  );
};

export default Page;
