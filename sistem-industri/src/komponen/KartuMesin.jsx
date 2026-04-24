// 1. Import React
import React from "react";
// 2. Latihan 1: Destructuring
function KartuMesin({ nama, status, produksi = 0 }) {
  // Logika penentuan warna badge berdasarkan status
  let badgeColor = "bg-secondary";
  if (status === "Running") badgeColor = "bg-success";
  if (status === "Stop") badgeColor = "bg-danger";
  if (status === "Maintenance") badgeColor = "bg-warning";
  return (
    // Menggunakan class -> className di JSX
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>
        <span className={`badge ${badgeColor}`}>{status}</span>
        <hr />
        <p>
          Produksi Saat Ini: <strong>{produksi}</strong> Unit
        </p>
      </div>
    </div>
  );
}
// 3. Export agar bisa dipakai di file lain
export default KartuMesin;
