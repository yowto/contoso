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
        console.log(Account);
        for (i = 0; i < students.length; i++) {

            var obj = students[i];

            for (var p in obj) {
                if (obj.hasOwnProperty(p) && obj[p] == "Anand") {
                    console.log(obj);
                }
            }

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