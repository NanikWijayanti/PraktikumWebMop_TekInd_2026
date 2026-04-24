import React from "react";
// Import komponen yang sudah dibuat
import KartuMesin from "./Komponen/KartuMesin";
import KartuKaryawan from "./komponen/KartuKaryawan"; // Menambahkan import untuk yang Kartu Karyawan
function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
      <div className="row">
        {/* Kolom 1: Menggunakan komponen dengan data berbeda */}
        <div className="col-md-4">
          <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
        </div>
        {/* Kolom 2 */}
        <div className="col-md-4">
          <KartuMesin nama="CNC-Milling-02" status="Maintenance" produksi={0} />
        </div>
        {/* Kolom 3 */}
        <div className="col-md-4">
          <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
        </div>
      </div>
      <hr className="my-5" /> {/* Garis pembatas agar rapi */}
      <h2 className="text-center mb-4">Data Karyawan Lini A</h2>
      <div className="row">
        {/* Karyawan 1: Manager */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Nanik Wijayanti"
            jabatan="Manager"
            bagian="Produksi"
          />
        </div>
        {/* Karyawan 2: Operator */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Syalfa Oktifa"
            jabatan="Operator"
            bagian="Assembly"
          />
        </div>
        {/* Karyawan 3: QC */}
        <div className="col-md-4">
          <KartuKaryawan
            nama="Maessa Andrea"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
