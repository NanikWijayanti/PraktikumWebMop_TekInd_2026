import React, { useState, useEffect } from "react";
function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());

  // LATIHAN 1:
  const [kota, setKota] = useState(""); // Menambahkan state kota
  // useEffect berjalan sekali setelah komponen dirender pertama kali
  useEffect(() => {
    // Membuat interval timer
    const timerID = setInterval(() => {
      setWaktu(new Date()); // Update state waktu setiap detik
    }, 1000);
    // Cleanup function: Dijalankan saat komponen dihapus/hancur
    // Penting untuk mencegah memory leak
    return () => {
      clearInterval(timerID);
    };
  }, []); // Array kosong [] artinya hanya dijalankan sekali saat mount

  // Menambahkan untuk Latihan 1
  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]);

  return (
    <div className="alert alert-info text-center">
      <h4>
        Jam {kota || "Indonesia"}: {waktu.toLocaleTimeString()}
      </h4>

      <p className="mt-2 mb-1 text-muted">
        Input Kota (Latihan 1: Dependency Array useEffect)
      </p>

      <input
        type="text"
        placeholder="Masukkan nama kota"
        className="form-control mt-2"
        value={kota}
        onChange={(e) => setKota(e.target.value)}
      />
    </div>
  );
}
export default JamDigital;
