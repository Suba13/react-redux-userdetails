app.controller('cont', function($scope) {
    $scope.question = [
        {serialno:'1',name:'Proposed Staffing Plan and people availability',status:'Green',weight:10,score:8,total:80, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'2',name:'Meetings: Customer Stand Up',status:'Green',weight:10,score:7,total:70, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:10}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:9}]},
        {serialno:'3',name:'Meetings: Customer Demo',status:'Green', weight:10,score:5,total:50, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:12}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:13}]},
        {serialno:'4',name:'Knowledge Transfer Meeting and Documentation',status:'red', weight:10,score:3,total:30, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'5',name:'Staffing plan exist with appropriate skill set and location assigned?',status:'red',weight:10,score:1,total:10, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'6',name:'Program plan exists and up to date?',status:'Green',weight:10,score:5,total:50, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'7',name:'Use Case Documentation exists per format we have defined',status:'red',weight:10,score:2,total:20, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'8',name:'Dashboard is set up per the acceptance criteria defined in use case docs?',status:'red',weight:10,score:3,total:30, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'9',name:'If we are in bugs fixing, is the plan setup correctly for the bugs?',status:'Green',weight:10,score:5,total:50, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        {serialno:'10',name:'If we have entered the QA phase, is the test report available?',status:'Green',weight:10,score:9,total:90, previousComments: [{date:'11/06/2016',comment:"doc196069 : Signed SOW is available in insight now with updated date.",comment_score:8}, {date:'10/13/2017',comment:"SOW is not available in insight.",comment_score:5}]},
        ];
        $scope.enableMassSaveBtn = false;
        $scope.$watch('question', function(oldValue, newValue){
            if(oldValue != newValue){
                $scope.enableMassSaveBtn = true;
            }
        }, true);

        });




