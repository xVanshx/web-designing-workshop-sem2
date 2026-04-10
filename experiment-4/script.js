function submitForm(){
    let n =document.getElementById("subjects").value;
    let sub = n;
    let totalMarks = 0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        totalMarks += marks;
    }
    let avg = totalMarks / n;
    let grade
    let resuilt
    if(avg >= 90){
        grade = "A";
        resuilt = "Pass";
    }
    else if(avg >= 80){
        grade = "B";
        resuilt = "Pass";
    }
    else if(avg >= 70){
        grade = "C";
        resuilt = "Pass";
    }
    else if(avg >= 60){
        grade = "D";
        resuilt = "Pass";
    }
    else{
        grade = "F";
        resuilt = "Fail";
    }
    document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + "<br>Average Marks: " + avg + "<br>Grade: " + grade + "<br>Result: " + resuilt;
}