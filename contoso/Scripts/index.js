document.addEventListener("DOMContentLoaded", function () {
    loadStudents();
});

function loadStudents() {

    var studentsTable = document.getElementById("tblstudentcontent");

    StudentModule.getStudents(function (studentsList) {
        setupStudentsTable(studentsList);
    });

    function setupStudentsTable(students) {
        console.log(students);
        for (i = 0; i < students.length; i++) {
            var row = document.createElement('tr');

            var lastnamecol = document.createElement('td');
            lastnamecol.innerHTML = students[i].LastName;
            row.appendChild(lastnamecol);

            var firstnamecol = document.createElement('td');
            firstnamecol.innerHTML = students[i].FirstName;
            row.appendChild(firstnamecol);

            studentsTable.appendChild(row);
        }
    }
}