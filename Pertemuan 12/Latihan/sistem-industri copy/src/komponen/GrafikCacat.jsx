import React from "react";
import { Doughnut } from "react-chartjs-2";

// Import komponen Chart.js
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen chart
ChartJS.register(ArcElement, Tooltip, Legend);

function GrafikCacat() {
  // Data grafik donat
  const data = {
    labels: ["Scratch", "Dent", "Lainnya"],
    datasets: [
      {
        label: "Proporsi Cacat",
        data: [50, 30, 20], // Pert 12 Latihan 2: Data proporsi cacat
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(54, 162, 235, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Pengaturan tampilan grafik
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Grafik Proporsi Cacat Produksi",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default GrafikCacat;