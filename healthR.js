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
    const sleepHours = 7; // Example: Retrieve actual sleep hours from user data
    const steps = 1500; // Example: Retrieve actual steps from user data
    const waterIntake = 3; // Example: Retrieve actual water intake from user data
    const calorieIntake = 1800; // Example: Retrieve actual calorie intake from user data
    const bmi = calculateBMI(70, 1.75); // Example: Retrieve user's weight and height

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
                <h1>E-Health Monitoring System Report</h1>
                <h2>Health Analysis</h2>
                
                <p>Sleep Hours: ${sleepHours} hours</p>
                <p>${sleepAnalysis}</p>

                <p>Steps Traveled: ${steps} steps</p>
                <p>${stepsAnalysis}</p>

                <p>Water Intake: ${waterIntake} liters</p>
                <p>${waterAnalysis}</p>

                <p>Calorie Intake: ${calorieIntake} calories</p>
                <p>${calorieAnalysis}</p>

                <p>BMI: ${bmi.toFixed(2)}</p>
            </div>
        </body>
        </html>
    `;

    return reportContent;
}

function calculateBMI(weight, height) {
    return weight / (height * height);
}
