app.controller("index", function($scope,$location) {
$scope.change_password=function() {
                     $location.path( "/change_password" );
 
};
$scope.logout_disable=function() {
                     $location.path( "/" );
 
};

});