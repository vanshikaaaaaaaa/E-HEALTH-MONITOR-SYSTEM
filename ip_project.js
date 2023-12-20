document.getElementById("healthForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Retrieve input values
  const sleepHours = parseFloat(document.getElementById("sleepHours").value);
  const waterIntake = parseFloat(document.getElementById("waterIntake").value);
  const steps = parseInt(document.getElementById("steps").value);

  // Perform health evaluation
  let sleepResult = "";
  let waterResult = "";
  let stepsResult = "";

  if (sleepHours > 8) {
    sleepResult = "You're getting more than 8 hours of sleep. It might be excessive.";
  } else if (sleepHours < 6) {
    sleepResult = "You're getting less than 6 hours of sleep. It's inadequate for health.";
  } else {
    sleepResult = "You're getting 6-8 hours of sleep. That's good for health!";
  }

  if (waterIntake > 2) {
    waterResult = "You're drinking more than 2 liters of water. It's generally good!";
  } else if (waterIntake < 1.5) {
    waterResult = "You're drinking less than 1.5 liters of water. It's not enough for hydration.";
  } else {
    waterResult = "You're drinking 1.5-2 liters of water. That's a good range!";
  }

  if (steps > 10000) {
    stepsResult = "You're walking more than 10,000 steps. That's great!";
  } else if (steps < 5000) {
    stepsResult = "You're walking less than 5,000 steps. Aim for more activity!";
  } else {
    stepsResult = "You're walking 5,000-10,000 steps. Keep it up!";
  }

  // Display results
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>Health Summary</h2>
    <p><strong>Sleep:</strong> ${sleepResult}</p>
    <p><strong>Water Intake:</strong> ${waterResult}</p>
    <p><strong>Steps:</strong> ${stepsResult}</p>
    <a href="#" id="downloadPdf">Download PDF</a>
  `;

  // Generate dashboard content
  const dashboardDiv = document.getElementById("dashboard");
  dashboardDiv.innerHTML = `
    <h2>Health Dashboard</h2>
    <div class="card">
      <h3>Sleep</h3>
      <p>${sleepResult}</p>
    </div>
    <div class="card">
      <h3>Water Intake</h3>
      <p>${waterResult}</p>
    </div>
    <div class="card">
      <h3>Steps</h3>
      <p>${stepsResult}</p>
    </div>
  `;

  // Download PDF functionality
  document.getElementById("downloadPdf").addEventListener("click", function() {
    const pdf = new jsPDF();
    const filename = 'health_report.pdf';

    // Add content to the PDF
    pdf.text(`Health Summary`, 15, 15);
    pdf.text(`Sleep: ${sleepResult}`, 15, 30);
    pdf.text(`Water Intake: ${waterResult}`, 15, 45);
    pdf.text(`Steps: ${stepsResult}`, 15, 60);

    // Save the PDF
    pdf.save(filename);
  });
});
