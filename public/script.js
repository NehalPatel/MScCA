var app = angular.module("myApp", []);

app.controller('formCtrl', function ($scope) {
    $scope.student_name = "Nehal Patel";
    $scope.student_email = "";
    $scope.student_address = "";
    $scope.student_phone = "";


    $scope.submitForm = function (e) {
        console.log('stop here'); return false;
        e.preventDefault();

        // Create an object with the form data
        var formData = {
            student_name: $scope.student_name,
            student_email: $scope.student_email,
            student_address: $scope.student_address,
            student_phone: $scope.student_phone
        };

        // Make an AJAX POST request to your Express.js server
        $http.post('/submit', formData)
            .then(function (response) {
                // Handle the response from the server, e.g., show a success message
                console.log(response.data);
                alert('Data saved to MongoDB');
            })
            .catch(function (error) {
                // Handle errors, e.g., display an error message
                console.error(error);
                alert('Error saving data to MongoDB');
            });

        return false;
    };
});