document.addEventListener("DOMContentLoaded", function () {
   
    $("#tblstudentcontent").percentageLoader({
        width: 180, height: 180, progress: 0.5, value: '512kb'
    });
    loadStudents();
     
});

function loadStudents() {

    var studentsTable = document.getElementById("tblstudentcontent");

    StudentModule.getStudents(function (studentsList) {
        setupStudentsTable(studentsList);
        console.log("this is ");
        console.log(studentsList);
    });

    function setupStudentsTable(students) {
        console.log(students);
        console.log(localStorage.response);
        
        for (i = 0; i < students.length; i++) {

            //var obj = students[i];

            //for (var p in obj) {
            //    if (obj.hasOwnProperty(p) && localStorage.response.indexof(obj[p]) >-1)  {
            //        console.log(obj);
            //        console.log(":)");
            //    }
            //}

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