import React, { useContext, useEffect, useState } from "react";
import { FhirClientContext } from "../FhirClientContext";

const Allergies = () => {
  const context = useContext(FhirClientContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const client = context.client;
      const q = new URLSearchParams();
      q.set("patient", client.patient.id);
      const response = await client.request(`AllergyIntolerance?${q}`, {
        flat: true
      });
      setData(response);
    };
    fetch();
  }, []);

  console.log(data);

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
