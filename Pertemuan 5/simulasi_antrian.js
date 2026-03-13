// fungsi untuk mengolah data antrian dan menampilkannya
// bagian ini menangani looping dan pencetakan pesan ke console/layar
function prosesAntrian(antrian, isNew = false) {
    const logDiv = document.getElementById("logAntrian");
    
    // perulangan untuk mengambil setiap data job di dalam array
    antrian.forEach(function(job) {
        
        // susunan teks sesuai instruksi: memproses job [id] - [nama] selama [durasi]
        let pesan = "> memproses job [" + job.idJob + "] - " + job.namaProses + " selama " + job.durasi + " menit";
        
        // cetak hasil ke console browser (sesuai poin c tugas)
        console.log(pesan);

        // bagian ini untuk memunculkan teks di monitor halaman web
        if(logDiv) {
            let itemLog = document.createElement("div");
            itemLog.className = "log-item"; 
            
            // kalau ini job tambahan, beri warna orange agar beda
            if(isNew) itemLog.style.color = "#ff9f43"; 
            
            itemLog.innerText = pesan;
            logDiv.appendChild(itemLog);
        }
    });
}

// fungsi utama yang mengatur jalannya simulasi dari awal sampai akhir
function jalankanSimulasiJob() {
    const logDiv = document.getElementById("logAntrian");
    const loader = document.getElementById("loader");
    const progress = document.getElementById("progress");
    const scanText = document.getElementById("scanText");
    const statusMesin = document.getElementById("statusMesin");

    // reset tampilan: kosongkan log dan munculkan animasi loading
    logDiv.innerHTML = ""; 
    loader.style.display = "block";
    scanText.style.display = "block";
    statusMesin.innerText = "initializing...";

    // logika untuk menggerakkan bar loading dari 0 ke 100%
    let lebarBar = 0;
    let timerLoading = setInterval(() => {
        if (lebarBar >= 100) {
            clearInterval(timerLoading); 
            mulaiSimulasiData(); // lanjut ke proses data kalau loading selesai
        } else {
            lebarBar += 2; 
            progress.style.width = lebarBar + "%";
        }
    }, 30);

    // bagian inti yang berisi data job (array of objects)
    function mulaiSimulasiData() {
        statusMesin.innerText = "processing";
        scanText.innerText = ">>> database connected. starting simulation...";

        // poin a: membuat daftar antrian awal (3 pekerjaan)
        let antrianMesin = [
            { idJob: "J01", namaProses: "drilling", durasi: 30 },
            { idJob: "J02", namaProses: "milling", durasi: 45 },
            { idJob: "J03", namaProses: "welding", durasi: 20 }
        ];

        // poin b & c: panggil fungsi untuk proses 3 data pertama
        prosesAntrian(antrianMesin);

        // poin d: simulasi tambah 1 job baru setelah jeda 1.5 detik
        setTimeout(() => {
            let jobBaru = { idJob: "J04", namaProses: "lathe (bubut)", durasi: 60 };
            
            // masukkan ke array dan tampilkan hasilnya
            antrianMesin.push(jobBaru); 
            prosesAntrian([jobBaru], true); 
            
            statusMesin.innerText = "completed";
            scanText.innerText = ">>> simulation finished.";
        }, 1500);
    }
}