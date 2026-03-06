function hitungGaji(){

// Mengambil data input
let nama = document.getElementById("namaKaryawan").value;
let tanggal = document.getElementById("tanggalKerja").value;
let gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
let jamLembur = parseFloat(document.getElementById("jamLembur").value);


// =======================
// PERHITUNGAN
// =======================

// upah lembur per jam
let upahLembur = 1.5 * (gajiPokok / 173);

// total lembur
let totalLembur = jamLembur * upahLembur;

// total gaji
let totalGaji = gajiPokok + totalLembur;


// =======================
// OUTPUT CONSOLE
// =======================

console.log("===== DATA KARYAWAN =====");
console.log("Nama: " + nama);
console.log("Tanggal: " + tanggal);

console.log("===== DATA GAJI =====");
console.log("Gaji Pokok: " + gajiPokok);
console.log("Jam Lembur: " + jamLembur);

console.log("===== PERHITUNGAN =====");
console.log("Upah Lembur per Jam: " + upahLembur.toFixed(2));
console.log("Total Upah Lembur: " + totalLembur.toFixed(2));
console.log("Total Gaji: " + totalGaji.toFixed(2));


// =======================
// OUTPUT KE HTML (TABEL)
// =======================

let tabel = document.getElementById("tabelGaji");

tabel.innerHTML = `
<tr>
<td>${nama}</td>
<td>${tanggal}</td>
<td>Rp ${gajiPokok.toLocaleString()}</td>
<td>${jamLembur} Jam</td>
<td>Rp ${totalGaji.toLocaleString()}</td>
</tr>
`;


// =======================
// ALERT
// =======================

alert(
"Halo " + nama +
"\nTotal Gaji Anda: Rp " + totalGaji.toLocaleString()
);

}