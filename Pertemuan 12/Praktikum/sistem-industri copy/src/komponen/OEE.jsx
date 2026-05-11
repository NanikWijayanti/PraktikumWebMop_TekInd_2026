import { useState } from "react";

function OEE() {
  // STATE (INPUT USER)
  const [planTime, setPlanTime] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [goodParts, setGoodParts] = useState(0);

  // PERHITUNGAN OEE
  const availability = runTime / planTime || 0;
  const performance = totalParts / runTime || 0;
  const quality = goodParts / totalParts || 0;

  const oee = availability * performance * quality * 100;

  // STATUS WARNA
  let statusClass = "";

  if (oee < 50) {
    statusClass = "oee-low"; // MERAH
  } else if (oee > 85) {
    statusClass = "oee-high"; // HIJAU
  }

  return (
    <div className="oee-container">
      <h2 className="oee-title">OEE Kalkulator</h2>

      {/*FORM INPUT*/}
      <div className="oee-form">
        <input
          type="number"
          placeholder="Plan Time"
          onChange={(e) => setPlanTime(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Run Time"
          onChange={(e) => setRunTime(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Total Parts"
          onChange={(e) => setTotalParts(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Good Parts"
          onChange={(e) => setGoodParts(Number(e.target.value))}
        />
      </div>

      {/*DETAIL PERHITUNGAN*/}
      <div className="oee-detail">
        <p>Availability: {(availability * 100).toFixed(2)}%</p>
        <p>Performance: {(performance * 100).toFixed(2)}%</p>
        <p>Quality: {(quality * 100).toFixed(2)}%</p>
      </div>

      {/*HASIL OEE*/}
      <h1 className={`oee-result ${statusClass}`}>OEE: {oee.toFixed(2)}%</h1>
    </div>
  );
}

export default OEE;
