function hitungBiaya(){

let biayaBahanBaku = parseFloat(document.getElementById("biayaBahanBaku").value);
let biayaTenagaKerja = parseFloat(document.getElementById("biayaTenagaKerja").value);
let biayaOverhead = parseFloat(document.getElementById("biayaOverhead").value);
let jumlahProduksi = parseFloat(document.getElementById("jumlahProduksi").value);

let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

console.log("=== LOGIKA PERHITUNGAN BIAYA PRODUKSI ===");

console.log("Biaya Bahan Baku =", biayaBahanBaku);
console.log("Biaya Tenaga Kerja =", biayaTenagaKerja);
console.log("Biaya Overhead =", biayaOverhead);
console.log("Jumlah Produksi =", jumlahProduksi);

console.log("Rumus:");
console.log("(Bahan Baku + Tenaga Kerja + Overhead) / Jumlah Produksi");

console.log("Perhitungan:");
console.log("(" + biayaBahanBaku + " + " + biayaTenagaKerja + " + " + biayaOverhead + ") / " + jumlahProduksi);

console.log("Total Biaya Produksi per Unit =", totalPerUnit);
// tampilkan ke HTML
document.getElementById("outputTotal").innerText = totalPerUnit;

// kondisi efisiensi
if (jumlahProduksi < 100) {
    document.getElementById("outputStatus").innerText = "Biaya Tinggi (Ekonomi Skala Kecil)";
} else {
    document.getElementById("outputStatus").innerText = "Biaya Efisien";
}

}