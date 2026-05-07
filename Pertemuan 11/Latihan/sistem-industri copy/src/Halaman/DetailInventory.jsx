import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailInventori() {
  const { id } = useParams(); // ambil ID dari URL

  return (
    <div className="container mt-4">
      <h2>Detail Item Inventori</h2>
      <p>ID Item: {id}</p>

      <Link to="/Inventori" className="btn btn-secondary">
        Kembali ke Inventori
      </Link>
    </div>
  );
}

export default DetailInventori;
