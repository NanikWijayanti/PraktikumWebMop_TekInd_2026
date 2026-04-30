import React, { useState } from "react"; // MENAMBAHKAN useState (WAJIB UNTUK SWITCH)
import KartuMesin from "./Komponen/KartuMesin.jsx";
import KartuKaryawan from "./komponen/KartuKaryawan";
import CounterProduksi from "./komponen/CounterProduksi";
import JamDigital from "./komponen/JamDigital";
import OEE from "./komponen/OEE"; // MENAMBAHKAN KOMPONEN PROYEK MINI

function App() {
  const [halaman, setHalaman] = useState("latihan"); // MENAMBAHKAN UNTUK MEMBUAT HALAMAN BARU (PROYEK MINI)

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>

      <footer className="text-center mb-4 text-muted">
        Dibuat oleh Nanik Wijayanti | NIM: 23051430006
      </footer>

      {/* MENAMBAHKAN BUTTON SWITCH HALAMAN */}
      <div className="text-center mb-4">
        <button
          className={`btn me-2 ${halaman === "latihan" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setHalaman("latihan")}
        >
          Halaman Latihan
        </button>

        <button
          className={`btn ${halaman === "oee" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setHalaman("oee")}
        >
          OEE Kalkulator
        </button>
      </div>

      {/* ================== HALAMAN LATIHAN ================== */}
      {halaman === "latihan" && (
        <>
          <div className="row">
            <div
              className="card border-0 mb-5"
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="card-body p-4">
                <h3 className="text-center fw-semibold mb-4">
                  Praktik 3 (Pembuatan form input state pada Monitoring Lini
                  Produksi A)
                </h3>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="h-100 hover-card">
                      <KartuMesin
                        nama="CNC-Turning-01"
                        status="Running"
                        produksi={150}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="h-100 hover-card">
                      <KartuMesin
                        nama="CNC-Milling-02"
                        status="Maintenance"
                        produksi={0}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="h-100 hover-card">
                      <KartuMesin
                        nama="Press-Hydraulic-05"
                        status="Stop"
                        produksi={85}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <CounterProduksi />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <JamDigital />
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <h2 className="text-center mb-4">Data Karyawan Lini A</h2>

          <div className="row">
            <div className="col-md-4">
              <KartuKaryawan
                nama="Nanik Wijayanti"
                jabatan="Manager"
                bagian="Produksi"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Syalfa Oktifa"
                jabatan="Operator"
                bagian="Assembly"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Maessa Andrea"
                jabatan="QC"
                bagian="Quality Control"
              />
            </div>
          </div>
        </>
      )}

      {/* ================== HALAMAN OEE ================== */}
      {halaman === "oee" && (
        <div className="text-center">
          <OEE /> {/* MENAMPILKAN PROYEK MINI OEE */}
        </div>
      )}
    </div>
  );
}

export default App;
