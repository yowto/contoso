var CourseModule = (function () {

    return {
        getAssignments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/assignments",
                success: function (data) {
                    callback(data);
                }
            });
        },
        addAssignments: function (course, callback) {
            $.ajax({
                type: "POST",
                dataType: "json",
                data: course,
                url: "https://contoso-jhut043.azurewebsites.net/api/assignments",
                success: function (data) {
                    callback();
                    console.log("addAssignment success");
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("fail " + textStatus + " " + errorThrown);
                }

            });
        },
        deleteAssignments: function (id, callback) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/assignments/" + id,
                success: function (data) {
                    callback();
                    console.log("Deleted");
                }
            });
        },
        updateAssignments: function (id, course, callback) {
            $.ajax({
                type: "PUT",
                dataType: "json",
                data: course,
                url: "https://contoso-jhut043.azurewebsites.net/api/assignments/" + id,
                success: function (data) {
                    callback();
                    console.log("updateAssignment success");
                }
            })
        }
    };
}());