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
            if (assignments[i].SubmitLink) {
                assignmenttitlecol.innerHTML = assignments[i].AssignmentTitle + " <b>Submitted</b>";
            } else {
                assignmenttitlecol.innerHTML = assignments[i].AssignmentTitle + " <b>Not Submitted</b>";
            }

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
            
           

            readField.appendChild(assignmenttitlecol);
            row.appendChild(readField);
            row.appendChild(editField);


            var percentcol = document.createElement('td');
            percentcol.innerHTML = assignments[i].Percent;
            row.appendChild(percentcol);

            var coursecol = document.createElement('td');
            CourseModule.getCourseByID(assignments[i].CourseID, function (courseFromID) {
                console.log(courseFromID.Title);
            });
            console.log(assignments[i].Course);
            row.appendChild(coursecol);
            
            var duedatecol = document.createElement('td');
            duedatecol.innerHTML = assignments[i].DueDate;
            row.appendChild(duedatecol);

            assignmentsTable.appendChild(row);
            if (assignments[i].SubmitLink) {
                $("#update" + assignments[i].AssignmentID).hide();
            } else {
                submitAssignment(assignments[i].AssignmentID, assignments[i]);
            }
            
            
        }
    }

}

function submitAssignment(ID, assignment) {
    var element = document.getElementById("submitLinkBtn" + ID);
    if (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            var assignmentID = parseInt(ID);

            var updatedAssignmentInfo = {
                AssignmentID: assignmentID,
                AssignmentTitle: assignment.AssignmentTitle,
                Percent: assignment.Percent,
                StudentID: assignment.StudentID,
                CourseID: assignment.CourseID,
                DueDate: assignment.DueDate,
                SubmitLink: $("#submitLink"+ID).val()
            }

            AssignmentModule.updateAssignment(assignmentID, updatedAssignmentInfo, function () {
                console.log("updating assignment");

            });
        });
    }
}