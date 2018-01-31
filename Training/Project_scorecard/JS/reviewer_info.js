angular.module('Myapp').controller('contrl', function($scope) {
    $scope.review_date="21-10-2017";
    $scope.score='7.5';
});

angular.module('Myapp').controller('Project_heading', function($scope) {
    $scope.pname="Delivery &gt; Walgreen Co. (-) Retail Renewal &gt";
    $scope.pcode='16101  ';
});
angular.module('Myapp').controller('name', function($scope) {
    $scope.admin_name="	Kalpana";
    $scope.reviewer_name=" Parthasarathy";
});