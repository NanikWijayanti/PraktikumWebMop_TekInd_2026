import React, { useEffect, useState } from "react"; // Menambahkan useState karena datanya disimpan di state (Pert 12 latihan 1)
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement, // Menambahkan LineElement untuk grafik garis target (Pert 12 Lat 1)
  PointElement, // Menambahkan PointElement untuk garis target (Pert 12 Lat 1)
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart agar grafik dapat ditampilkan (Pert 12 Lat 1)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

function GrafikProduksi() {
  const [produksiData, setProduksiData] = useState([]); // Menyimpan data produksi dari API (Pert 12 Lat 1)

  // Fetch data saat komponen pertama kali dibuka
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      // Mengubah response menjadi JSON (Pert 12 Lat 1)
      .then((res) => res.json())

      // Mengambil data API dan membuat data produksi acak (Pert 12 Lat 1)
      .then((data) => {
        const hasilProduksi = data.slice(0, 6).map(() => {
          return Math.floor(Math.random() * 100) + 120;
        });

        // Menyimpan hasil produksi ke state (Pert 12 Lat 1)
        setProduksiData(hasilProduksi);
      })

      // Menampilkan error jika fetch gagal (Pert 12 Lat 1)
      .catch((err) => console.log(err));
  }, []);

  // Data untuk Grafik
  const data = {
    labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"],
    datasets: [
      {
        label: "Jumlah Produksi (Unit)",
        data: produksiData, // Data berasal dari API (Pert 12 Lat 1)
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Target",

        // Target produksi konstan (Pert 12 Lat 1)
        data: [150, 150, 150, 150, 150, 150],

        type: "line", // Tipe campuran (Bar + Line)
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
      },
    ],
  };

  // Opsi Tampilan Grafik
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Produksi Harian - Lini 1",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default GrafikProduksi;
