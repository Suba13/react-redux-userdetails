app.controller("password", function($scope,$location,$rootScope) {
	$rootScope.showHeader = true;
$scope.submit_forgot_password=function() {
                     $location.path( "/" );
};

});
app.controller("change_password", function($scope,$location,$rootScope) {
	$rootScope.showHeader = true;
	$rootScope.employee_designation = true;
$scope.submit_forgot_password=function() {
                     $location.path( "/admin-all-project" );
};

});

