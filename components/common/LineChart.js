import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, annotationPlugin, Title, Tooltip, Legend);
const labels = ["January", "February", "March", "April", "May", "June", "July", "August"];

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    // padding: 20,
  },
  interaction: {
    intersect: false,
    mode: "nearest",
  },
  //   aspectRatio: 1,
  scales: {
    xAxis: {
      // // beginAtZero: true,
      // offset: true,
      grid: {
        // display:false,
        lineWidth: 1,
        borderWidth: 1,
        tickWidth: 0,
        // color: "red",
      },
    },
    yAxis: {
      grid: {
        borderColor: "#E0E0E0",
        borderDash: [7, 3],
      },
      beginAtZero: true,
      lineWidth: 5,
      max: 100,
      ticks: {
        stepSize: 20,
        height: 105,
        callback: (context) => {
          return `${context}%`;
        },
      },
    },
  },

  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: "line",
          scaleID: "xAxis",
          value: labels[new Date().getMonth() - 1],
          label: {
            content: "Now",
            display: true,
            position: "end",
            backgroundColor: "#3AB4F9",
            borderRadius: "1000",
            // yAdjust: 35,
          },
          borderColor: "#3AB4F9",
          backgroundColor: "red",
          borderDash: [5, 5],
          borderWidth: 2,
        },
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
      usePointStyle: true,
      displayColors: false,
      yAlign: "bottom",
      xAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      callbacks: {
        label: function (context) {
          //    console.log(context);
          return `${context.raw}% Perfect`;
        },
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 49, 80, 81, 56, 55, 60],
      tension: 0.5,
      pointRadius: 0,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#5193F5",
    },
    {
      label: "Dataset 2",
      data: [35, 70, 60, 31, 36, 40, 60],
      tension: 0.5,
      pointRadius: 0,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#A4A4A4",
    },
  ],
};

export default function LineChart() {
  return (
    <div style={{ position: "relative", height: "300px" }}>
      <Line options={options} data={data} />
    </div>
  );
}
