// Transportation emission rates (kg CO2 per mile) — same rates from the original Python prototype
const transportEmissions = {
  car: 4.6,
  bus: 1.2,
  train: 0.8,
  bike: 0,
};

// Illustrative average estimates
const ELECTRICITY_FACTOR = 0.4; // kg CO2 per kWh
const dietFactors = {
  meat: 7.0,
  average: 5.0,
  vegetarian: 3.8,
  vegan: 2.9,
};

let chart = null;
let lastBreakdown = null;

function calculateFootprint() {
  const mode = document.getElementById("transportMode").value;
  const miles = parseFloat(document.getElementById("milesPerWeek").value) || 0;
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const diet = document.getElementById("diet").value;

  const transportTotal = transportEmissions[mode] * miles * 4.33;
  const energyTotal = electricity * ELECTRICITY_FACTOR;
  const dietTotal = dietFactors[diet] * 30;

  const breakdown = {
    Transportation: Math.round(transportTotal * 10) / 10,
    "Home Energy": Math.round(energyTotal * 10) / 10,
    Diet: Math.round(dietTotal * 10) / 10,
  };

  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);

  lastBreakdown = breakdown;
  renderResults(breakdown, total);
}

function renderResults(breakdown, total) {
  document.getElementById("results").hidden = false;
  document.getElementById("totalValue").textContent =
    `${Math.round(total)} kg CO₂`;

  const ctx = document.getElementById("breakdownChart");
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(breakdown),
      datasets: [
        {
          label: "kg CO₂ / month",
          data: Object.values(breakdown),
          backgroundColor: ["#b8863c", "#4a90a4", "#6b9e78"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });
}

function exportCSV() {
  if (!lastBreakdown) return;
  const rows = [["Category", "kg CO2 per month"]];
  Object.entries(lastBreakdown).forEach(([category, value]) => {
    rows.push([category, value]);
  });
  const csvContent = rows.map((r) => r.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "carbon_footprint.csv";
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById("calculateBtn").addEventListener("click", calculateFootprint);
document.getElementById("exportBtn").addEventListener("click", exportCSV);

// Calculate once on load with default values
document.addEventListener("DOMContentLoaded", calculateFootprint);