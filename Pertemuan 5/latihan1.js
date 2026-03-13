// 1. FUNGSI UNTUK MENGATUR TAMPILAN INPUT (Muncul/Sembunyi)
function aturInput() {
  let pilihan = document.getElementById("pilihBangun").value;
  let v2 = document.getElementById("val2");
  let v3 = document.getElementById("val3");

  if (pilihan === "balok") {
    v2.style.display = "block";
    v3.style.display = "block";
  } else {
    v2.style.display = "none";
    v3.style.display = "none";
  }
}

// 2. LOGIKA PERHITUNGAN (Multiple Function)
function prosesHitungMulti() {
  let pilihan = document.getElementById("pilihBangun").value;
  let a = parseFloat(document.getElementById("val1").value);
  let b = parseFloat(document.getElementById("val2").value);
  let c = parseFloat(document.getElementById("val3").value);

  if (isNaN(a)) {
    alert("Isi angka dulu!");
    return;
  }

  let hasil1, hasil2, label1, label2;

  if (pilihan === "lingkaran") {
    hasil1 = (3.14 * a * a).toFixed(2);
    hasil2 = (2 * 3.14 * a).toFixed(2);
    label1 = "Luas: ";
    label2 = "Keliling: ";
  } else if (pilihan === "kubus") {
    hasil1 = (a * a * a).toFixed(2); // Volume s^3
    hasil2 = (6 * a * a).toFixed(2); // Luas Permukaan
    label1 = "Volume: ";
    label2 = "L. Permukaan: ";
  } else if (pilihan === "balok") {
    if (isNaN(b) || isNaN(c)) {
      alert("Isi lebar dan tinggi!");
      return;
    }
    hasil1 = (a * b * c).toFixed(2); // Volume p*l*t
    hasil2 = (2 * (a * b + a * c + b * c)).toFixed(2); // Luas Permukaan
    label1 = "Volume: ";
    label2 = "L. Permukaan: ";
  }

  // Update ke HTML
  document.getElementById("teksHasil1").innerHTML =
    label1 + "<span>" + hasil1 + "</span>";
  document.getElementById("teksHasil2").innerHTML =
    label2 + "<span>" + hasil2 + "</span>";

  // Laporan ke Console (Penting untuk dosen)
  console.log(`--- Perhitungan ${pilihan} ---`);
  console.log(`Nama: Nanik Wijayanti`);
  console.log(`${label1} ${hasil1}`);
  console.log(`${label2} ${hasil2}`);
}
