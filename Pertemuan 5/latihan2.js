

// 1. Inisialisasi Array sesuai perintah
let daftarCacat = ["C-001", "C-05", "C-012", "C-001", "C-020"];

// Menampilkan array ke halaman saat load
document.getElementById("tampil-array").innerText = daftarCacat.join(", ");

function hitungCacat() {
    // 2. Variabel Counter (Penghitung)
    let counter = 0;
    let target = "C-001";

    console.log("--- Laporan Detail Cacat ---");
    console.log("Jumlah Total Item: " + daftarCacat.length);

    // 3. Looping (Perulangan)
    for (let i = 0; i < daftarCacat.length; i++) {
        
        // Menampilkan proses di console
        console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);

        // 4. Kondisi IF untuk mengecek target
        if (daftarCacat[i] === target) {
            counter++; // Jika ketemu, counter bertambah
        }
    }

    // 5. Output ke tampilan HTML
    document.querySelector("#label-hasil span").innerText = counter + " Unit";

    // Output ke Console
    console.log("Hasil akhir pencarian " + target + " : " + counter);
    alert("Analisis Selesai! Ditemukan " + counter + " cacat " + target);
}