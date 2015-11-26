var CourseModule = (function () {

    return {
        getCourses: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/courses",
                success: function (data) {
                    callback(data);
                }
            });
        },
        getCourseByID: function (id,callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/courses/" +id,
                success: function (data) {
                    callback(data);
                }
            });
        },
        addCourse: function (course, callback) {
            $.ajax({
                type: "POST",
                dataType: "json",
                data: course,
                url: "https://contoso-jhut043.azurewebsites.net/api/courses",
                success: function (data) {
                    callback();
                    console.log("addCourse success");
                },
                error: function (XMLHttpRequest, textStatus,errorThrown) {
                    alert("fail " + textStatus + " " + errorThrown);
                }

            });
        },
        deleteCourse: function (id, callback) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/courses/" + id,
                success: function (data) {
                    callback();
                    console.log("Deleted");
                }
            });
        },
        updateCourse: function (id,course, callback) {
            $.ajax({
                type: "PUT",
                dataType: "json",
                data: course,
                url: "https://contoso-jhut043.azurewebsites.net/api/courses/" + id,
                success: function (data) {
                    callback();
                    console.log("updateCourse success");
                }
            })
        }
    };
}());