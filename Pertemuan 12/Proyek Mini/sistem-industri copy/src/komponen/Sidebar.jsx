import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ mobile = false }) {
  const menuStyle = ({ isActive }) => ({
    padding: "14px 16px",
    borderRadius: "14px",
    textDecoration: "none",
    color: isActive ? "#fff" : "#cbd5e1",
    background: isActive
      ? "linear-gradient(90deg, #2563eb, #3b82f6)"
      : "transparent",
    fontWeight: isActive ? "600" : "500",
    transition: "0.2s",
  });

  return (
    <div
      className="d-flex flex-column text-white"
      style={{
        width: mobile ? "100%" : "270px",
        height: mobile ? "100%" : "100vh",
        background: "#111827",
        padding: "24px",
        position: mobile ? "relative" : "fixed",
        top: 0,
        left: 0,
        boxShadow: "0 0 25px rgba(0,0,0,0.15)",
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-5">
        <div>
          <h4 className="fw-bold mb-1">Sistem Pabrik</h4>

          <small
            style={{
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Dashboard Industri
          </small>
        </div>
      </div>

      {/* Section */}
      <small
        className="mb-3"
        style={{
          color: "#64748b",
          letterSpacing: "1px",
          fontSize: "11px",
        }}
      >
        MENU NAVIGASI
      </small>

      {/* Menu */}
      <div className="d-flex flex-column gap-2">
        <NavLink to="/" style={menuStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/inventori" style={menuStyle}>
          Inventori
        </NavLink>

        <NavLink to="/laporan-kualitas" style={menuStyle}>
          Laporan Kualitas
        </NavLink>
      </div>

      {/* Footer */}
      {!mobile && (
        <div className="mt-auto pt-4 border-top border-secondary">
          <div className="fw-semibold">Nanik Wijayanti</div>

          <small style={{ color: "#94a3b8" }}>NIM: 23051430006</small>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
