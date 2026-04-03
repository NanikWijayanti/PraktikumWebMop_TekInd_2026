// 1. Inisialisasi Elemen
const formAudit = document.getElementById("formAudit");
const tabelBody5S = document.getElementById("tabelBody5S");
const inputCari = document.getElementById("inputCari");
const STORAGE_KEY = "DATA_AUDIT_5S";

// 2. Load awal
document.addEventListener("DOMContentLoaded", () => loadDataAudit());

// 3. FILTER / SEARCH
inputCari.addEventListener("input", function () {
  const kataKunci = inputCari.value.toLowerCase();
  loadDataAudit(kataKunci);
});

// 4. SIMPAN DATA
formAudit.addEventListener("submit", (e) => {
  e.preventDefault();

  // ambil input dengan BENAR (di dalam submit)
  const tanggalInput = document.getElementById("tanggalAudit").value;
  const shift = document.getElementById("shiftAudit").value;
  const nama = document.getElementById("namaAuditor").value.trim();

  // validasi
  if (!tanggalInput || !shift || !nama) {
    alert("Semua field wajib diisi!");
    return;
  }

  const dicentang = document.querySelectorAll(".ceklis-5s:checked");

  // ARRAY
  const master5S = ["Seiri", "Seiton", "Seiso", "Seiketsu", "Shitsuke"];
  let arrayPatuh = [];

  dicentang.forEach((box) => arrayPatuh.push(box.value));

  let arrayKurang = master5S.filter((item) => !arrayPatuh.includes(item));

  // format tanggal biar rapi
  const tanggalFormatted = new Date(tanggalInput).toLocaleDateString("id-ID");

  const dataBaru = {
    id: Date.now(),
    tanggal: tanggalFormatted,
    shift: shift,
    auditor: nama,
    skor: (arrayPatuh.length / 5) * 100,
    patuh: arrayPatuh,
    kurang: arrayKurang,
  };

  saveData(dataBaru);
  formAudit.reset();
  loadDataAudit();
});

// 5. SIMPAN
function saveData(data) {
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  list.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// 6. RENDER
function loadDataAudit(filter = "") {
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  tabelBody5S.innerHTML = "";

  const dataTersaring = list.filter((item) =>
    (item.auditor || "").toLowerCase().includes(filter.trim()),
  );

  dataTersaring.forEach((item) => {
    const row = document.createElement("tr");

    const teksPatuh =
      Array.isArray(item.patuh) && item.patuh.length > 0
        ? item.patuh.join(", ")
        : "-";

    const teksKurang =
      Array.isArray(item.kurang) && item.kurang.length > 0
        ? item.kurang.join(", ")
        : "Sempurna";

    row.innerHTML = `
      <td class="ps-3">${item.tanggal}</td>
      <td>${item.shift || "-"}</td>
      <td><b>${item.auditor}</b></td>
      <td>
        <span class="badge ${
          item.skor === 100
            ? "bg-success"
            : item.skor >= 60
              ? "bg-warning"
              : "bg-danger"
        }">
          ${item.skor}%
        </span>
      </td>
      <td>
        <small class="text-success d-block">${teksPatuh}</small>
        <small class="text-danger d-block">${teksKurang}</small>
      </td>
      <td class="text-center">
        <button class="btn btn-sm btn-danger" onclick="hapus(${item.id})">
          Hapus
        </button>
      </td>
    `;

    tabelBody5S.appendChild(row);
  });
}

// 7. HAPUS
window.hapus = function (id) {
  if (confirm("Hapus data ini?")) {
    let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list.filter((i) => i.id !== id)),
    );
    loadDataAudit();
  }
};
