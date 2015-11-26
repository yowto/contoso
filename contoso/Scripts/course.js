document.addEventListener("DOMContentLoaded", function () {

    loadCourses();
    createCourse();
    
});

function loadCourses() {

    
    var coursesTable = document.getElementById("tblcoursecontent");

    CourseModule.getCourses(function (coursesList) {
        setupCoursesTable(coursesList);
    });

    function setupCoursesTable(courses) {
        console.log(courses);
        
        for (i = 0; i < courses.length; i++) {

     
            var row = document.createElement('tr');

            var readField = document.createElement('div');
            readField.setAttribute("id", "read" + courses[i].CourseID);
            readField.setAttribute("float", "left");
            var coursetitlecol = document.createElement('td');
            coursetitlecol.innerHTML = courses[i].Title;

            
            
            readField.appendChild(coursetitlecol);
            row.appendChild(readField);
            row.appendChild(editField);
            

            var percentcompletecol = document.createElement('td');
            percentcompletecol.innerHTML = courses[i].PercentComplete;
            row.appendChild(percentcompletecol);

            var deletecol = document.createElement('td');
            var delCourseBtn = document.createElement("button");
            delCourseBtn.setAttribute("class", "btn btn-default delete-course");
            delCourseBtn.setAttribute("id", courses[i].CourseID);
            delCourseBtn.innerHTML = "Delete Course";
            deletecol.appendChild(delCourseBtn);

            var editCourseBtn = document.createElement("button");
            editCourseBtn.setAttribute("class", "btn btn-default update-course");
            editCourseBtn.setAttribute("id", "edit" + courses[i].CourseID);
            editCourseBtn.innerHTML = "Edit Course";
            deletecol.appendChild(editCourseBtn);

            row.appendChild(deletecol);

            coursesTable.appendChild(row);


            deleteCourse(courses[i].CourseID);
            updateCourse(courses[i].CourseID);
        }

        

    }
    
}

function createCourse() {
    document.getElementById("create-course-btn").addEventListener("click", function (event) {
        event.preventDefault();
        var newCourse = {
            Title: $("#coursename").val()
        }
        
        CourseModule.addCourse(newCourse, function () {
            console.log("adding course");

            location.reload();
        });


    });
}

function deleteCourse(ID) {
    
    document.getElementById(ID).addEventListener("click", function () {
        
        var courseID = parseInt($(this).attr("id"));
        console.log("deleting course");
        console.log(courseID);
        CourseModule.deleteCourse(courseID, function () {
            console.log("deleting course");

            location.reload();
        })
    });
    
}

function updateCourse(ID) {
    document.getElementById("edit" + ID).addEventListener("click", function () {
        $("#update" + ID).toggle();
    });
}