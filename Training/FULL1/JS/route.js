var app = angular.module("myapp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "HTML/login.html"
    })
     .when("/forget_pswd", {
        templateUrl : "HTML/forget_pswd.html"
    })

     .when("/change_password", {
        templateUrl : "HTML/change_pswd.html"
    })
     .when("/admin-all-project", {
        templateUrl : "HTML/admin-all-project-page.html"
    })
     .when("/admin-home", {
        templateUrl : "HTML/admin-home-page.html"
    })
     .when("/reviewer-home", {
        templateUrl : "HTML/reviewer-home-page.html"
    })
     .when("/reviewer-reviewed", {
        templateUrl : "HTML/reviewer-reviewed-page.html"
    })
     .when("/reviewer-notreviewed", {
        templateUrl : "HTML/reviewer-notreviewed-page.html"
    })
     .when("/add-new-project", {
        templateUrl : "HTML/addnewproject.html"
    })
     .when("/admin_second_page", {
        templateUrl : "HTML/admin-second-page.html"
    })
     .when("/reviewer_second_page", {
        templateUrl : "HTML/reviewer-second-page.html"
    })
      .when("/consolitated", {
        templateUrl : "HTML/consolitated-page.html"
    });

});
