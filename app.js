const calcy = () => {
    // initiating variables 
    let S1 = document.getElementById("S1").value;
    let S2 = document.getElementById("S2").value;
    let S3 = document.getElementById("S3").value;
    let S4 = document.getElementById("S4").value;

    let totalGrades = parseFloat(S1) + parseFloat(S2) + parseFloat(S3) + parseFloat(S4);
    let perc = (totalGrades / 400) * 100;
    let grades = "";

    // finding grades as per percentage 
    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    } else {
        grades = 'D';
    }
    // displaying result 
    if (perc >= 39.5) {
        document.getElementById('result-display').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else if (perc >= 0 && perc < 39.5) {
        document.getElementById('result-display').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
    else {
        document.getElementById('result-display').innerHTML = ` Please add marks. `

    }
}

