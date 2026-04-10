// 1. Inisialisasi Elemen
const formAudit = document.getElementById("formAudit");
const tabelBody5S = document.getElementById("tabelBody5S");
const inputCari = document.getElementById("inputCari");
const STORAGE_KEY = "DATA_AUDIT_5S";

// 2. Load awal
document.addEventListener("DOMContentLoaded", function () {
  loadDataAudit();
});

// 3. Filter / Search
inputCari.addEventListener("input", function () {
  const kataKunci = inputCari.value.toLowerCase().trim();
  loadDataAudit(kataKunci);
});

// 4. Fungsi cek operator sudah terjadwal
function isOperatorAlreadyScheduled(operatorId, tanggal, shiftBaru) {
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  return list.some(function (item) {
    return (
      item.operatorId === operatorId &&
      item.tanggalRaw === tanggal &&
      item.shift !== shiftBaru
    );
  });
}

// 5. Simpan data
formAudit.addEventListener("submit", function (e) {
  e.preventDefault();

  const tanggalInput = document.getElementById("tanggalAudit").value;
  const shift = document.getElementById("shiftAudit").value;
  const operatorValue = document.getElementById("operatorAudit").value;

  // parsing operator
  let operatorId = "";
  let operatorNama = "";

  if (operatorValue.includes("|")) {
    const splitData = operatorValue.split("|");
    operatorId = splitData[0];
    operatorNama = splitData[1];
  }

  // validasi input kosong
  if (!tanggalInput || !shift || !operatorId || !operatorNama) {
    alert("Semua field wajib diisi.");
    return;
  }

  // validasi bentrok shift
  if (isOperatorAlreadyScheduled(operatorId, tanggalInput, shift)) {
    alert(
      "Operator dengan ID " +
        operatorId +
        " (" +
        operatorNama +
        ") sudah terjadwal pada shift lain di tanggal yang sama.",
    );
    return;
  }

  // ambil checklist 5S
  const dicentang = document.querySelectorAll(".ceklis-5s:checked");

  const master5S = ["Seiri", "Seiton", "Seiso", "Seiketsu", "Shitsuke"];
  let arrayPatuh = [];

  dicentang.forEach(function (box) {
    arrayPatuh.push(box.value);
  });

  let arrayKurang = master5S.filter(function (item) {
    return !arrayPatuh.includes(item);
  });

  // format tanggal
  const tanggalFormatted = new Date(tanggalInput).toLocaleDateString("id-ID");

  const dataBaru = {
    id: Date.now(),
    tanggal: tanggalFormatted,
    tanggalRaw: tanggalInput,
    shift: shift,
    operatorId: operatorId,
    operator: operatorNama,
    auditor: operatorNama,
    skor: (arrayPatuh.length / 5) * 100,
    patuh: arrayPatuh,
    kurang: arrayKurang,
  };

  saveData(dataBaru);
  formAudit.reset();
  loadDataAudit();
});

// 6. Simpan ke localStorage
function saveData(data) {
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  list.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// 7. Render data
function loadDataAudit(filter = "") {
  let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  tabelBody5S.innerHTML = "";

  const dataTersaring = list.filter(function (item) {
    return (item.auditor || "").toLowerCase().includes(filter.toLowerCase());
  });

  dataTersaring.forEach(function (item) {
    const row = document.createElement("tr");

    const teksPatuh =
      Array.isArray(item.patuh) && item.patuh.length > 0
        ? item.patuh.join(", ")
        : "-";

    const teksKurang =
      Array.isArray(item.kurang) && item.kurang > 0
        ? item.kurang.join(", ")
        : "Sempurna";

    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.shift}</td>
      <td><b>${item.operator}</b></td>
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

// 8. Hapus data
window.hapus = function (id) {
  if (confirm("Hapus data ini?")) {
    let list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    list = list.filter(function (item) {
      return item.id !== id;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    loadDataAudit();
  }
};
