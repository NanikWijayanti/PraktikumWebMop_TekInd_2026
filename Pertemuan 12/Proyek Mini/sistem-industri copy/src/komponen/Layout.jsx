import React from "react";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  return (
    <div>
      {/* Sidebar Desktop */}
      <div className="d-none d-lg-block">
        <Sidebar />
      </div>

      {/* Main Content Desktop */}
      <main
        className="d-none d-lg-block"
        style={{
          marginLeft: "270px",
          padding: "32px",
          minHeight: "100vh",
          background: "#f1f5f9",
        }}
      >
        {children}
      </main>

      {/* Mobile Layout */}
      <div className="d-lg-none">
        {/* Navbar Mobile */}
        <nav
          className="navbar px-3 shadow-sm d-flex justify-content-between align-items-center"
          style={{
            background: "#111827",
            height: "72px",
          }}
        >
          {/* Kiri */}
          <div className="d-flex align-items-center">
            {/* Button Toggle */}
            <button
              className="btn btn-outline-light me-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
            >
              ☰
            </button>

            {/* Logo */}
          </div>

          {/* Tengah */}
          <div className="text-center text-white">
            <div
              style={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "18px",
              }}
            >
              Sistem Pabrik
            </div>

            <small
              style={{
                opacity: 0.7,
                fontSize: "11px",
              }}
            >
              Dashboard Industri
            </small>
          </div>

          {/* Kanan */}
          <div className="text-end text-white">
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "14px",
              }}
            >
              Nanik Wijayanti
            </div>

            <small
              style={{
                opacity: 0.7,
                fontSize: "10px",
              }}
            >
              23051430006
            </small>
          </div>
        </nav>

        {/* Sidebar Mobile */}
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="mobileSidebar"
          style={{
            width: "260px",
            background: "#17212b",
          }}
        >
          <div className="offcanvas-header border-bottom border-secondary">
            <h5 className="offcanvas-title fw-bold">Menu Navigasi</h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body p-0">
            <Sidebar mobile />
          </div>
        </div>

        {/* Content Mobile */}
        <main
          style={{
            padding: "20px",
            background: "#f1f5f9",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
