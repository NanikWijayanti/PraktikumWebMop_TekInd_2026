function cekShift() {
  let nama = document.getElementById("namaOperator").value;
  let kodeShift = parseInt(document.getElementById("kodeShift").value);

  let namaShift;

  switch (kodeShift) {
    case 1:
      namaShift = "Pagi";
      break;

    case 2:
      namaShift = "Siang";
      break;

    case 3:
      namaShift = "Malam";
      break;

    default:
      namaShift = "Shift Tidak Valid";
  }

  console.log("===== DATA OPERATOR =====");
  console.log("Nama Operator: " + nama);
  console.log("Kode Shift: " + kodeShift);
  console.log("Nama Shift: " + namaShift);

  let tabel = document.getElementById("tabelShift");

  tabel.innerHTML = `
<tr>
<td>${nama}</td>
<td>${kodeShift}</td>
<td>${namaShift}</td>
</tr>
`;

  alert("Operator " + nama + " bekerja pada shift: " + namaShift);
}
