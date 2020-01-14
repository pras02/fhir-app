import React, { useContext, useEffect, useState } from "react";
import { FhirClientContext } from "../FhirClientContext";

const PatientName = ({ name = [] }) => {
  let entry = name.find(nameRecord => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h2>No Name</h2>;
  }
  return <h1>{entry.given.join(" ") + " " + entry.family}</h1>;
};

const PatientBanner = patient => {
  return (
    <div>
      <PatientName name={patient.name} />
      <span>
        Gender: <b>{patient.gender.toUpperCase()}</b>,{" "}
      </span>
      <span>
        DOB: <b>{patient.birthDate}</b>
      </span>
    </div>
  );
};

const Patient = () => {
  //static contextType = FhirClientContext;

  const context = useContext(FhirClientContext);

  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState();
  const [error, setError] = useState();

  const handlePatient = patient => {
    setPatient(patient);
    setLoading(false);
    setError(null);
  };

  const handleError = error => {
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    // const client = context.client;
    context.client.patient
      .read()
      .then(patient => handlePatient(patient))
      .catch(error => handleError(error));
  }, []);

  if (loading) {
    return null;
  }
  if (error) {
    return error.message;
  }
  return (
    <div className="patBanner">
      <PatientBanner {...patient} />
      <br />
      Patient ID: {patient.id}
    </div>
  );
};

export default Patient;
