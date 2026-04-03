// 1. Seleksi Elemen
const formProduksi = document.getElementById("formProduksi");
const tabelBody = document.getElementById("tabelBody");
const btnHapusSemua = document.getElementById("btnHapusSemua");
// Kunci untuk LocalStorage
const STORAGE_KEY = "DATA_PRODUKSI_INDUSTRI";
// Fungsi Load Data saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
  loadDataFromStorage();
});
// 2. Event Listener: Submit Form
formProduksi.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah refresh halaman
  // Ambil Value dari Form
  const tanggal = document.getElementById("tanggal").value;
  const operator = document.getElementById("operator").value;
  const shift = document.getElementById("shift").value;
  const jumlah = document.getElementById("jumlah").value;
  // Validasi Sederhana (JavaScript)
  if (jumlah <= 0) {
    alert("Jumlah produksi harus lebih dari 0!");
    return;
  }
  // Buat Object Data
  const dataBaru = {
    id: Date.now(), // ID unik berdasarkan waktu
    tanggal: tanggal,
    operator: operator,
    shift: shift,
    jumlah: parseInt(jumlah),
  };
  // Simpan ke LocalStorage
  saveData(dataBaru);
  // Reset Form
  formProduksi.reset();
  // Refresh Tampilan Tabel
  loadDataFromStorage();
});
// 3. Fungsi Simpan ke LocalStorage
function saveData(data) {
  // Ambil data lama (jika ada), jika tidak ada array kosong
  let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // Tambah data baru ke array
  dataLama.push(data);
  // Simpan kembali ke LocalStorage (Convert ke JSON String)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}
// 4. Fungsi Baca & Render Tabel
function loadDataFromStorage() {
  // Ambil data
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // Kosongkan tabel dulu
  tabelBody.innerHTML = "";

  // Loop data dan buat baris tabel
  data.forEach(function (item) {
    const row = document.createElement("tr");
    row.innerHTML = ` 
            <td>${item.tanggal}</td> 
            <td>${item.operator}</td> 
            <td>${item.shift}</td> 
            <td>${item.jumlah}</td> 
            <td> 
                <button class="btn btn-sm btn-danger" 
onclick="hapusData(${item.id})">Hapus</button> 
            </td> 
        `;
    tabelBody.appendChild(row);
  });
}

// 5. Fungsi Hapus Data Spesifik
// Kita pasang di window agar bisa dipanggil dari inline HTML onclick
window.hapusData = function (id) {
  if (confirm("Yakin ingin menghapus log ini?")) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Filter data: hapus item yang id-nya cocok
    let dataBaru = data.filter((item) => item.id !== id);

    // Simpan ulang
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));

    // Refresh tampilan
    loadDataFromStorage();
  }
};

// 6. Event Hapus Semua
btnHapusSemua.addEventListener("click", function () {
  if (confirm("PERINGATAN: Semua data akan dihapus permanen!")) {
    localStorage.removeItem(STORAGE_KEY);
    loadDataFromStorage();
  }
});

// LATIHAN 1: Fitur Pencarian Operator
const inputCari = document.getElementById("inputCari");

inputCari.addEventListener("input", function () {
  const keyword = inputCari.value.toLowerCase(); // Ubah ketikan jadi huruf kecil
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Filter data berdasarkan nama operator yang diketik
  let dataTersaring = data.filter((item) =>
    item.operator.toLowerCase().includes(keyword),
  );

  // Kosongkan tabel dan isi dengan data hasil saringan
  tabelBody.innerHTML = "";
  dataTersaring.forEach(function (item) {
    const row = document.createElement("tr");
    row.innerHTML = ` 
      <td>${item.tanggal}</td> 
      <td>${item.operator}</td> 
      <td>${item.shift}</td> 
      <td>${item.jumlah}</td> 
      <td> 
          <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button>
      </td> 
    `;
    tabelBody.appendChild(row);
  });
});

// LATIHAN 2: Fitur Sortir Jumlah Terbesar
const btnSortir = document.getElementById("btnSortir");

btnSortir.addEventListener("click", function () {
  // 1. Ambil data dari LocalStorage
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // 2. Proses Sortir (Mengurutkan b ke a / Besar ke Kecil)
  data.sort((a, b) => b.jumlah - a.jumlah);

  // 3. Render ulang tabel dengan data yang sudah urut
  tabelBody.innerHTML = "";
  data.forEach(function (item) {
    const row = document.createElement("tr");
    row.innerHTML = ` 
      <td>${item.tanggal}</td> 
      <td>${item.operator}</td> 
      <td>${item.shift}</td> 
      <td>${item.jumlah}</td> 
      <td> 
          <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button>
      </td> 
    `;
    tabelBody.appendChild(row);
  });
});