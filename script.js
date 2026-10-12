
const inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {

    input.addEventListener("input", function() {

        // Get the row containing the input
        const row = input.closest("tr");

        // Restrict CA scores to a maximum of 10
        if (
            input.classList.contains("ca1") ||
            input.classList.contains("ca2") ||
            input.classList.contains("ca3")
        ) {
            if (Number(input.value) > 10) {
                alert("CA score cannot be above 10");
                input.value = 10;
            }
        }

        // Restrict Exam score to a maximum of 70
        if (input.classList.contains("exam")) {
            if (Number(input.value) > 70) {
                alert("Exam score cannot be above 70");
                input.value = 70;
            }
        }

        // Get the input fields in this row
        const ca1 = row.querySelector(".ca1");
        const ca2 = row.querySelector(".ca2");
        const ca3 = row.querySelector(".ca3");
        const exam = row.querySelector(".exam");

        // Convert input values to numbers
        const ca1Value = Number(ca1.value);
        const ca2Value = Number(ca2.value);
        const ca3Value = Number(ca3.value);
        const examValue = Number(exam.value);

        // Calculate total
        const total =
            ca1Value + ca2Value + ca3Value + examValue;

        // Display total
        const totalCell = row.querySelector(".total");
        totalCell.innerHTML = total;

        // Get grade cell
        const gradeCell = row.querySelector(".grade");

        // Assign grade
        if (total >= 70) {
            gradeCell.innerHTML = "A";
        }
        else if (total >= 60) {
            gradeCell.innerHTML = "B";
        }
        else if (total >= 50) {
            gradeCell.innerHTML = "C";
        }
        else if (total >= 45) {
            gradeCell.innerHTML = "D";
        }
        else if (total >= 40) {
            gradeCell.innerHTML = "E";
        }
        else {
            gradeCell.innerHTML = "F";
        }

    });

});