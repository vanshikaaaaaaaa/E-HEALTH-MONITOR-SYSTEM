function generateReport() {
  const waterIntake = parseFloat(document.getElementById('water').value);
  const steps = parseInt(document.getElementById('steps').value);
  const sleepHours = parseFloat(document.getElementById('sleep').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  
  const calories = parseFloat(document.getElementById('calories').value);

  let report = '<table border="1">';
  report += '<tr><th><b>HEALTH METRIC</b></th><th>ANALYSIS</th></tr>';

  if (sleepHours >= 7 && sleepHours <= 9) {
    report += '<tr><td><b><i>Sleep Monitoring</i><b></td><td>Your sleep is good for health. \n </td></tr>';
  } else if (sleepHours < 5) {
    report += '<tr><td><b><i>Sleep Monitoring</i><b></td><td>Your sleep is insufficient. Lack of sleep can impact your health negatively.\n</td></tr>';
  } else if (sleepHours > 9) {
    report += '<tr><td><b><i>Sleep Monitoring</i><b></td><td>Your sleep is excessive. Too much sleep might have adverse effects.\n</td></tr>';
  } else {
    report += '<tr><td><b><i>Sleep Monitoring</i><b></td><td>Your sleep is within a healthy range.\n</td></tr>';
  }

  if (waterIntake < 64) {
    report += '<tr><td> <b> <i> Water Intake</i> </b> </td><td>Ensure to drink more water to meet daily requirements.\n</td></tr>';
  } else if (waterIntake >= 64 && waterIntake <= 100) {
    report += '<tr><td><b> <i> Water Intake</i> </b> </td><td>Your water intake is good.\n</td></tr>';
  } else {
    report += '<tr><td><b> <i> Water Intake</i> </b> </td><td>Be cautious! Drinking too much water can also have negative effects.\n</td></tr>';
  }

  if (steps < 5000) {
    report += '<tr><td> <b> <i> Step Tracker </i> </b> </td><td>You should try to increase your daily steps for better health.\n</td></tr>';
  } else if (steps >= 5000 && steps <= 10000) {
    report += '<tr><td><b> <i> Step Tracker </i> </b> </td><td>Your step count is at a moderate level.</td></tr>';
  } else {
    report += '<tr><td><b> <i> Step Tracker </i> </b> </td><td>Great job! You are exceeding the recommended step count.\n</td></tr>';
  }

  if (weight > 0 && height > 0) {
    const bmi = calculateBMI(weight, height);
    report += `<tr><td><b> <i> BMI</i> </b> </td><td>Your BMI is ${bmi.toFixed(2)}. ${interpretBMI(bmi)}\n</td></tr>`;
  }

  /* for calories intake */
  
      if (calories < 2000) 
      {
          report += '<tr><td> <b> <i> Calories Intake </i> </b> </td><td>Your calorie intake is below the recommended level.\n</td></tr>';
          
       /* return 'Your calorie intake is below the recommended level.';   */
      } 
      else if (calories >= 2000 && calories <= 3000)
      {
          report += '<tr><td> <b> <i> Calories Intake </i> </b> </td><td>Your calorie intake is within the recommended range\n</td></tr>';

       
      } 
      else
       {
          report += '<tr><td> <b> <i> Calories Intake </i> </b> </td><td>Your calorie intake is above the recommended level.\n</td></tr>';

      
      }

    

  


  report += '</table>';

  document.getElementById('report').innerHTML = report;
  showReportSection();
}






function showReportSection() {
  const reportSection = document.querySelector('.report-section');
  reportSection.style.display = 'block';
}

function downloadReport() {
  const reportText = document.getElementById('report').textContent;
  const blob = new Blob([reportText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'health_report.txt';
  a.click();
  URL.revokeObjectURL(url);
}




function calculateBMI(weight, height) {
  // BMI calculation formula: weight (kg) / (height (m) * height (m))
  return weight / ((height / 100) * (height / 100)); // height is usually in cm, so converting it to meters
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
