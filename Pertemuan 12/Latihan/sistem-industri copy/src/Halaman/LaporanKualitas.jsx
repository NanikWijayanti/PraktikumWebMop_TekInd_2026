import React from "react";
import { Link } from "react-router-dom";

function LaporanKualitas() {
  // Data cacat industri aluminium (mock data)
  const dataCacat = [
    { id: 1, produk: "Aluminium Sheet", cacat: 6, jenis: "Goresan Permukaan" },
    {
      id: 2,
      produk: "Aluminium Profile",
      cacat: 3,
      jenis: "Dimensi Tidak Presisi",
    },
    {
      id: 3,
      produk: "Aluminium Foil",
      cacat: 8,
      jenis: "Ketebalan Tidak Seragam",
    },
  ];

  const totalCacat = dataCacat.reduce((total, item) => total + item.cacat, 0);

  const getStatus = (cacat) => {
    if (cacat >= 7) return "Buruk";
    if (cacat >= 4) return "Cukup";
    return "Baik";
  };

  const getBadge = (cacat) => {
    if (cacat >= 7) return "bg-danger";
    if (cacat >= 4) return "bg-warning text-dark";
    return "bg-success";
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2>Laporan Kualitas Produksi Aluminium</h2>
        <p className="text-muted">Nanik Wijayanti (23051430006)</p>

        <h6 className="text-secondary">Proyek Mini: Navigasi Modular</h6>
      </div>

      <Link to="/" className="btn btn-secondary mb-3">
        ← Kembali ke Dashboard
      </Link>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Produk</th>
            <th>Jenis Cacat</th>
            <th>Jumlah Cacat</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataCacat.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.produk}</td>
              <td>{item.jenis}</td>
              <td>{item.cacat}</td>
              <td>
                <span className={`badge ${getBadge(item.cacat)}`}>
                  {getStatus(item.cacat)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="alert alert-info text-center mt-3">
        Total Cacat Produksi: <strong>{totalCacat}</strong>
      </div>
    </div>
  );
}

export default LaporanKualitas;
