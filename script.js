const input = document.querySelectorAll('input');

input.forEach((input) => {

    input.addEventListener('input', function() {

        // GET ThE ROW CONTAININg THE INPUT
        const row = input.closest('tr');

        // console.log('Row found:', row);

        //Selecting the inputs in this particular row
        const ca1 = row.querySelector('.ca1');
        const ca2 = row.querySelector('.ca2');
        const ca3 = row.querySelector('.ca3');
        const exam = row.querySelector('.exam');
        

        //Converting the input values from strin to numbers
        const ca1Value = Number(ca1.value);
        const ca2Value = Number(ca2.value);
        const ca3Value = Number(ca3.value);
        const examValue = Number(exam.value);

        //Calculating the total
        const total = ca1Value + ca2Value + ca3Value + examValue;


         //Display the total
        const totalCell = row.querySelector('.total');
        totalCell.innerHTML = total;

        //Get grade cell
        const gradeCell = row.querySelector('.grade');

        //Calculate the grade
        if (total >= 70) {
            gradeCell.innerHTML = "A";
        } else if (total >= 60) {
             gradeCell. innerHTML = "B";
        } else if (total >= 50) {
             gradeCell.innerHTML = "C";
        } else if (total >= 45) {
             gradeCell.innerHTML = "D";
        } else if (total >= 40) {
             gradeCell.innerHTML = "E";
        } else {
             gradeCell.innerHTML = "F";
        } 
        
    });
});