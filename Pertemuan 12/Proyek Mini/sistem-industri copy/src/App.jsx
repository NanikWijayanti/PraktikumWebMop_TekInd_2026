import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Halaman/Dashboard";
import Inventori from "./Halaman/Inventori";
import NotFound from "./Halaman/NotFound";
import DetailInventori from "./Halaman/DetailInventory"; // Latihan 1: Menambahkan route untuk Detail Inventori
import LaporanKualitas from "./Halaman/LaporanKualitas"; //Proyek Mini: Menambahkan import laporan kualitas
import Layout from "./komponen/Layout";

// import Navbar from "./Komponen/Navbar"; // Anda bisa buat navbar sendiri
// Buat Navbar.jsx sederhana untuk navigasi
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          Sistem Pabrik
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="/">
            Dashboard
          </a>
          <a className="nav-link" href="/Inventori">
            Inventori
          </a>
          <a className="nav-link" href="/laporan-kualitas">
            Laporan Kualitas
          </a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      {/* Sidebar Layout: Menghapus Navbar agar Sidebar dari Layout muncul */}
      {/* <Navbar /> */}

      <Layout>
        <Routes>
          {/* Route yang tepat akan di-render */}
          <Route path="/" element={<Dashboard />} />

          <Route path="/Inventori" element={<Inventori />} />

          <Route path="/Inventori/:id" element={<DetailInventori />} />
          {/* Latihan 1: Menambahkan route Detail inventori */}

          <Route path="/laporan-kualitas" element={<LaporanKualitas />} />
          {/* Proyek Mini: Menambahkan route laporan kualitas */}

          {/* Route untuk semua path lainnya (404) */}
          <Route path="*" element={<NotFound />} />
          {/* Perbaikan NotFound: Menggunakan path="*" */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
