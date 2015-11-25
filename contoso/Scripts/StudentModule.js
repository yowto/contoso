﻿var StudentModule = (function () {

    return {
        getStudents: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-jhut043.azurewebsites.net/api/students",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());