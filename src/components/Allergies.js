import React, { useContext, useEffect, useState } from "react";
import { FhirClientContext } from "../FhirClientContext";

const Allergies = () => {
  const context = useContext(FhirClientContext);

  const [allergies, setAllergies] = useState([]);

  // useEffect(async () => {
  //     const client = context.client;
  //     const q = new URLSearchParams();
  //     q.set("patient", client.patient.id);
  //     const response = await client.request(`AllergyIntolerance?${q}`, {
  //       flat: true
  //     });
  //     const  })

  // console.log(allergies);

  return <div>Allergies</div>;
};
export default Allergies;
