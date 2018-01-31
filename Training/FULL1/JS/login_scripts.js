 //login page jss
app.controller("login-page", function($scope,$location,$rootScope) {
	$rootScope.showHeader = true;
    $scope.validate=function() {
    	if($scope.login_username=="admin" && $scope.login_password=="admin")
    	  {
    	  	$location.path( "/admin-home" );
    	  }
    	  else if($scope.login_username=="reviewer" && $scope.login_password=="reviewer")
    	  {
    	  	$location.path( "/reviewer-home" );
    	  }
          else
          {
            alert("please enter correct credanials");
          }
};
});

