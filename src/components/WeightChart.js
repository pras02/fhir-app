import React, { useContext, useEffect } from "react";
import ChartJS from "chart.js";
import { FhirClientContext } from "../FhirClientContext";

const WeightChart = () => {
  const context = useContext(FhirClientContext);

  useEffect(() => {
    loadData();
  });

  //static contextType = FhirClientContext;
  const loadData = () => {
    const client = context.client;
    const q = new URLSearchParams();
    q.set("code", "http://loinc.org|29463-7");
    q.set("subject", client.patient.id);
    client
      .request(`Observation?${q}`, {
        pageLimit: 0,
        flat: true
      })
      .then(w => {
        const wMap = {
          weight: []
        };
        w.forEach(o => {
          wMap.weight.push({
            x: new Date(o.effectiveDateTime),
            y: o.valueQuantity.value
          });
          // o.component.forEach(c => {
          //   const code = client.getPath(c, "code.coding.0.code");
          //   if (code === "29463-7") {
          //     ;
          //   }
          // });
        });
        wMap.weight.sort((a, b) => a.x - b.x);
        renderChart(wMap);
      });
  };

  const renderChart = ({ weight }) => {
    new ChartJS("myChart2", {
      type: "line",
      data: {
        datasets: [
          {
            label: "Weight",
            data: weight,
            borderWidth: 2,
            borderColor: "rgba(0,153,102,1)",
            fill: false,
            cubicInterpolationMode: "monotone"
          }
        ]
      },

      options: {
        responsive: false,
        scales: {
          yAxes: [
            {
              offset: true,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 200,
                stepSize: 20
              }
            }
          ],
          xAxes: [
            {
              type: "time"
            }
          ]
        },
        title: {
          text: "Patient Weight",
          display: true,
          fontSize: 20
        }
      }
    });
  };

  return <canvas id="myChart2" width="600" height="400" />;
};

export default WeightChart;
