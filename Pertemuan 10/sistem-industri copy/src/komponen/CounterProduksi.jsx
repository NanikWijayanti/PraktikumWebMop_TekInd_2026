import React, { useState } from "react";

function CounterProduksi() {
  // Deklarasi state
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);
  const [status, setStatus] = useState("RUNNING"); // Menambahkan const untuk Latihan 2

  // Handler tambah produksi
  const tambahProduksi = () => {
    setJumlah(jumlah + 1);
  };

  // Handler reset shift
  const reset = () => {
    setJumlah(0);
    setStatus("RUNNING"); // Menambahkan untuk Latihan 2
  };

  // Handler emergency
  const emergencyStop = () => {
    setStatus("EMERGENCY"); // Untuk Latihan 2
  };

  return (
    <div className="text-center p-4 border rounded bg-light">
      <h5 className="text-muted">
        Latihan 2: Conditional Rendering (Emergency Stop)
      </h5>
      <h3>Simulasi Hitung Produk</h3>
      <h1 className="display-4">{jumlah}</h1>
      <p>Target: {target} Unit</p>
      {/* Conditional Rendering */}
      {jumlah >= target ? (
        <div className="alert alert-success d-inline-block">
          🎉 Target Tercapai!
        </div>
      ) : (
        <div className="alert alert-secondary d-inline-block">
          Produksi Berjalan...
        </div>
      )}
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={tambahProduksi}>
         +1 {status === "EMERGENCY"} {/* Menambahkan untuk Latihan 2 */} 
        </button>
        <button className="btn btn-danger" onClick={reset}>
          Reset Shift
        </button>
        <button className="btn btn-warning emergency-btn" onClick={emergencyStop}>
          Emergency Stop {/* Untuk Latihan 2 */}
        </button>
      </div>
      
      {/* Pesan Merah untuk Latihan 2 */}
      {status === "EMERGENCY" && (
        <div className="alert alert-danger mt-3">⚠️ EMERGENCY STOP AKTIF!</div>
      )}
    </div>
  );
}

export default CounterProduksi;
