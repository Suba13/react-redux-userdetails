var app = angular.module('Myapp', [])
app.controller('cont', function($scope) {
    $scope.question = [
        {serialno:'1',name:'Proposed Staffing Plan and people availability',status:'Green',weight:10,score:8,total:80},
        {serialno:'2',name:'Meetings: Customer Stand Up',status:'Green',weight:10,score:7,total:70},
        {serialno:'3',name:'Meetings: Customer Demo',status:'Green', weight:10,score:5,total:50},
        {serialno:'4',name:'Knowledge Transfer Meeting and Documentation',status:'red', weight:10,score:3,total:30},
        {serialno:'5',name:'Staffing plan exist with appropriate skill set and location assigned?',status:'red',weight:10,score:1,total:10},
        {serialno:'6',name:'Program plan exists and up to date?',status:'Green',weight:10,score:5,total:50},
        {serialno:'7',name:'Use Case Documentation exists per format we have defined',status:'red',weight:10,score:2,total:20},
        {serialno:'8',name:'Dashboard is set up per the acceptance criteria defined in use case docs?',status:'red',weight:10,score:3,total:30},
        {serialno:'9',name:'If we are in bugs fixing, is the plan setup correctly for the bugs?',status:'Green',weight:10,score:5,total:50},
        {serialno:'10',name:'If we have entered the QA phase, is the test report available?',status:'Green',weight:10,score:9,total:90},
        ];
});


