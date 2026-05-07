import React from 'react';

// Menerima props nama, jabatan, dan bagian dengan destructuring
function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card border-primary mb-3 shadow-sm">
      <div className="card-header bg-primary text-white">Profil Karyawan</div>
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>
        <p className="card-text">
          <strong>Jabatan:</strong> {jabatan} <br />
          <strong>Bagian:</strong> {bagian}
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan;