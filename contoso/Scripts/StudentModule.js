var StudentModule = (function () {

    return {
        getStudents: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://contoso-jhut043.azurewebsites.net/api/students",
                success: function (data) {
                    callback(data);
                }
            });
        },
        addStudent: function (student, callback) {
            $.ajax({
                type: "POST",
                dataType: "json",
                data: student,
                url: "https://contoso-jhut043.azurewebsites.net/api/students",
                success: function (data) {
                    console.log("addstudent success");
                    callback();
                }

            });
        }
    };
}());