import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Inventori() {
  const [products, setProducts] = useState([]);
  // Latihan 2: State untuk loading (menandakan data sedang dimuat)
  const [loading, setLoading] = useState(true);
  // Fetch Data saat komponen mount
  useEffect(() => {
    setLoading(true); // [TAMBAHAN] aktifkan loading sebelum fetch

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // Ambil hanya 5 data pertama untuk contoh
        setProducts(data.slice(0, 5));
        setLoading(false); // Latihan 2: Mematikan loading setelah data masuk
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Latihan 2: mematikan loading kalau error
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Data Inventori Bahan Baku</h1>
      <Link to="/" className="btn btn-secondary mb-3">
        Kembali ke Dashboard
      </Link>
      {loading ? (
        <p className="text-center">Memuat data...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID Item</th>
              <th>Nama Bahan</th>
              <th>Status Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {/* Link ke halaman detail menggunakan dynamic route berdasarkan ID */}
                  <Link to={`/Inventori/${item.id}`}>{item.title}</Link>
                </td>{" "}
                {/* Menggunakan title sebagai simulasi nama bahan */}
                <td>
                  <span className="badge bg-success">Available</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Inventori;
