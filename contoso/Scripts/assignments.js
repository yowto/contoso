document.addEventListener("DOMContentLoaded", function () {

    loadAssignments();

});

function loadAssignments() {
    var assignmentsTable = document.getElementById("tblassignmentscontent");

    AssignmentModule.getAssignments(function (assignmentsList) {
        setupAssignmentsTable(assignmentsList);
    });

    function setupAssignmentsTable(assignments) {
        console.log(assignments);

        for (i = 0; i < assignments.length; i++) {


            var row = document.createElement('tr');

            var readField = document.createElement('div');
            readField.setAttribute("id", "read" + assignments[i].CourseID);
            readField.setAttribute("float", "left");
            var assignmenttitlecol = document.createElement('td');
            assignmenttitlecol.innerHTML = assignments[i].AssignmentTitle;

            //editing form
            var editField = document.createElement('div');
            editField.setAttribute("id", "update" + assignments[i].AssignmentID);
            editField.setAttribute("float", "left");
            editField.setAttribute("clear", "left");
            
            
            var updateForm = document.createElement('form');
            updateForm.setAttribute("role", "form");
            var submitLink = document.createElement('textarea');
            submitLink.setAttribute("id", "submitLink" + assignments[i].AssignmentID);
            submitLink.setAttribute("placeholder", "Enter link to assignment here...");
            submitLink.required = true;
         
            var submitLinkBtn = document.createElement('button');
            submitLinkBtn.setAttribute("id", "submitLinkBtn" + assignments[i].AssignmentID);
            submitLinkBtn.innerHTML = "Submit Link";

            updateForm.appendChild(submitLink);
            updateForm.appendChild(submitLinkBtn);

            
            editField.appendChild(updateForm);
            if (assignments[i].submitLink != null) {
                $("update" + assignments[i].AssignmentID).hide();
                editField.innerHTML = "You have already submitted";
            }

            readField.appendChild(assignmenttitlecol);
            row.appendChild(readField);
            row.appendChild(editField);


            var percentcol = document.createElement('td');
            percentcol.innerHTML = assignments[i].Percent;
            row.appendChild(percentcol);

            var coursecol = document.createElement('td');
            loadCourseTitle();

            function loadCourseTitle() {
                var courseID = parseInt(assignments[i].CourseID);

                CourseModule.getCourses(courseID, function () {
                    getTitle(courseByID);
                });

                function getTitle(courseByID) {
                    console.log(courseByID);
                    coursecol.innerHTML = courseByID.CourseTitle;
                }
            }
            row.appendChild(coursecol);
            
            var duedatecol = document.createElement('td');
            duedatecol.innerHTML = assignments[i].DueDate;
            row.appendChild(deletecol);

            coursesTable.appendChild(row);


            deleteCourse(courses[i].CourseID);
            editCourse(courses[i].CourseID);
            updateCourse(courses[i].CourseID);
        }



    }

}