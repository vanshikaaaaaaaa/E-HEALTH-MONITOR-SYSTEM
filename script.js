function downloadReport() {
    // Simulate a click on a hidden download link

    // Your report content goes here
    const reportContent = generateHealthAnalysis();

    // Create a Blob containing the report content
    const blob = new Blob([reportContent], { type: 'text/html' });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a hidden link element
    const link = document.createElement('a');

    // Set the download attribute and href
    link.download = 'e_health_report.html';
    link.href = url;

    // Simulate a click on the link
    link.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
}

function generateHealthAnalysis() {
    // Your logic to retrieve user data and calculate health analysis 
    
  const waterIntake = parseFloat(document.getElementById('water').value);
  const steps = parseInt(document.getElementById('steps').value);
  const sleepHours = parseFloat(document.getElementById('sleep').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const bmi = calculateBMI(weight,height); // Example: Retrieve user's weight and height

  let bmiAnalysis = '';
  bmiAnalysis =    interpretBMI(bmi);
    // Analyze sleep hours
    let sleepAnalysis = '';
    if (sleepHours > 8) {
        sleepAnalysis = 'Excessive sleep. Consider reducing sleep duration and staying active.';
    } else if (sleepHours < 6) {
        sleepAnalysis = 'Inadequate sleep. Consider increasing sleep duration for better health.';
    }

    // Analyze steps
    let stepsAnalysis = steps < 2000 ? 'Low physical activity. Increase your daily steps to stay active.' : '';

    // Analyze water intake
    let waterAnalysis = waterIntake < 4 ? 'Low water intake. Drink more water for better hydration.' : '';

    // Analyze calorie intake
    let calorieAnalysis = '';
    if (calorieIntake < 1600) {
        calorieAnalysis = 'Low calorie intake. Ensure you are meeting your daily nutritional needs.';
    } else if (calorieIntake > 3000) {
        calorieAnalysis = 'High calorie intake. Consider a balanced diet to maintain a healthy weight.';
    }

    function interpretBMI(bmi) {
        if (bmi < 18.5) {
          return 'You are underweight. Consider consulting a nutritionist for a balanced diet.';
        } else if (bmi >= 18.5 && bmi < 25) {
          return 'Your BMI is within the healthy range.';
        } else if (bmi >= 25 && bmi < 30) {
          return 'You are overweight. Focus on maintaining a balanced diet and regular exercise.';
        } else {
          return 'You are obese. It\'s essential to consult a healthcare professional for guidance.';
        }
    }
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }
    // Generate the HTML report
    const reportContent = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>E-Health Monitoring System Report</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="reportContent">
                <h1>CareSync 360</h1>
                <h2>Health Analysis</h2>
                <table><tr>
                <p><i><b>Sleep Hours: ${sleepHours}hours</b></i> </p>
                <p>${sleepAnalysis}</p>
                </tr>
                <tr>
                <p><i><b>Steps Traveled: ${steps} steps</b></i> </p>
                <p>${stepsAnalysis}</p>
                </tr>
                <p><i><b>Water Intake: ${waterIntake} liters</b></i> </p>
                <p>${waterAnalysis}</p>
                <tr>
                <p><i><b>Calorie Intake: ${calorieIntake} calories</b></i> </p>
                <p>${calorieAnalysis}</p>
                </tr>
                <tr>
                <p>BMI: ${bmi.toFixed(2)}</p>
                </tr>
                <table>
            </div>
        </body>
        </html>
    `;

    return reportContent;
 
}
