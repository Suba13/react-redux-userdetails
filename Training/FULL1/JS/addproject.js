app.controller('addproject_cont', function($scope,$location,$rootScope) {
    $rootScope.employee_designation = true;
    $scope.question = [
        {serialno:'1',name:'Proposed Staffing Plan and people availability'},
        {serialno:'2',name:'Meetings: Customer Stand Up'},
        {serialno:'3',name:'Meetings: Customer Demo'},
        {serialno:'4',name:'Knowledge Transfer Meeting and Documentation'},
        {serialno:'5',name:'Staffing plan exist with appropriate skill set and location assigned?'},
        {serialno:'6',name:'Program plan exists and up to date?'},
        {serialno:'7',name:'Use Case Documentation exists per format we have defined'},
        {serialno:'8',name:'Dashboard is set up per the acceptance criteria defined in use case docs?'},
        {serialno:'9',name:'If we are in bugs fixing, is the plan setup correctly for the bugs?'},
        {serialno:'10',name:'If we have entered the QA phase, is the test report available?'},
        ];
        $scope.save_add_button=function() {
                     $location.path( "/admin-home" );
 
};

});
