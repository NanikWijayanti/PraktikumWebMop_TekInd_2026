import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailInventori() {
  const { id } = useParams();

  // [DATA DETAIL - SIMULASI PABRIK ALUMINIUM PT TDI]
  const dataDetail = [
    {
      id: "1",
      nama: "Aluminium Sheet",
      supplier: "PT TDI Metal Indonesia",
      proses: "Rolling",
      lokasi: "Gudang A",
      stok: 120,
      status: "Available",
    },
    {
      id: "2",
      nama: "Aluminium Profile",
      supplier: "PT TDI Extrusion",
      proses: "Extrusion",
      lokasi: "Gudang B",
      stok: 80,
      status: "Available",
    },
    {
      id: "3",
      nama: "Aluminium Foil",
      supplier: "PT TDI Foil Division",
      proses: "Cold Rolling",
      lokasi: "Gudang C",
      stok: 40,
      status: "Low Stock",
    },
  ];

  // Cari data berdasarkan ID
  const item = dataDetail.find((data) => data.id === id);

  if (!item) {
    return (
      <div className="container mt-4">
        <h3>Data tidak ditemukan</h3>
        <Link to="/Inventori" className="btn btn-secondary">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h5 className="text-muted">
          Detail Inventori - PT TDI Aluminium Industry
        </h5>
        <h2 className="fw-bold">Detail Bahan Baku</h2>
      </div>

      {/* TABEL DETAIL */}
      <div className="table-responsive">
        <table className="table table-bordered w-50 mx-auto">
          <tbody>
            <tr>
              <th>ID Item</th>
              <td>{item.id}</td>
            </tr>

            <tr>
              <th>Nama Material</th>
              <td>{item.nama}</td>
            </tr>

            <tr>
              <th>Supplier</th>
              <td>{item.supplier}</td>
            </tr>

            <tr>
              <th>Proses Produksi</th>
              <td>{item.proses}</td>
            </tr>

            <tr>
              <th>Lokasi Penyimpanan</th>
              <td>{item.lokasi}</td>
            </tr>

            <tr>
              <th>Jumlah Stok</th>
              <td>{item.stok} unit</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>
                <span
                  className={`badge px-3 py-2 ${
                    item.status === "Low Stock" ? "bg-danger" : "bg-success"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CATATAN */}
      <p className="text-center text-muted mt-3" style={{ fontSize: "14px" }}>
        Data ini digunakan untuk monitoring ketersediaan bahan baku pada proses
        produksi aluminium.
      </p>

      {/* BUTTON */}
      <div className="text-center mt-3">
        <Link to="/Inventori" className="btn btn-dark px-4">
          ← Kembali ke Inventori
        </Link>
      </div>
    </div>
  );
}

export default DetailInventori;
