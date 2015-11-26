var AssignmentModule = (function () {

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
        addAssignment: function (assignment, callback) {
            $.ajax({
                type: "POST",
                dataType: "json",
                data: assignment,
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
        deleteAssignment: function (id, callback) {
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
        updateAssignment: function (id, course, callback) {
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