import React, { useEffect } from "react";
import "./style.css";
import Chart from "chart.js/auto";

export default function App() {
  useEffect(() => {
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Men", "Women", "Unknown"],
        datasets: [
          {
            label: "Sweden",
            data: [60, 40, 20],
            backgroundColor: "red"
          },
          {
            label: "Netherlands",
            data: [40, 70, 10],
            backgroundColor: "green"
          },
          {
            data: [33, 33, 34],
            backgroundColor: "blue"
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        },
        indexAxis: "y",
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        tooltips: {
          enabled: false,
          position: "nearest"
        }
      }
    });

    ctx.onclick = function(e) {
      const canvasPosition = myChart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
      );
      console.log(canvasPosition);
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="200" />
    </div>
  );
}
