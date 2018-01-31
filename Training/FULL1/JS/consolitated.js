app.controller('consolitated-contrl', function($scope,$location)
{
    $scope.go=function(page) 
    {
                     $location.path('/' + page );
    };

    $scope.project = [
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',reviewer:'Parthasarathy', status:'reviewed', score:'8',review_date:'2-11-2017'},
        {code:'16102',name:'Active Bench (Internal)', reviewer:'Subadharshini', status:'reviewed', score:'7.5',review_date:'1-11-2017'},
        {code:'16103',name:'Darden Restaurants',reviewer:'Betsy', status:'pending', score:'7.2',review_date:'1-11-2017'},
        {code:'16104',name:'Mall of America',reviewer:'Parthasarathy', status:'reviewed', score:'6.3',review_date:'6-11-2017'},
        {code:'16105',name:'Bayer Business & Technology Services',reviewer:'Bharathi', status:'reviewed', score:'4.2',review_date:'3-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga', status:'pending', score:'4.1',review_date:'1-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini', status:'reviewed', score:'2.3',review_date:'2-11-2017'},
        {code:'16108',name:'Loreal Paris Global',reviewer:'Bharathi', status:'reviewed', score:'4.6',review_date:'6-11-2017'},
        {code:'16109',name:'walgrence, N.A.',reviewer:'Durga', status:'pending', score:'5.6',review_date:'2-11-2017'},
        {code:'16110',name:'keybank',reviewer:'Betsy', status:'reviewed', score:'4.8',review_date:'4-11-2017'},
        {code:'16111',name:'JCbenny',reviewer:'parthasarathy', status:'pending', score:'8.2',review_date:'2-11-2017'},
        {code:'16112',name:'Photon labs',reviewer:'Bharathi', status:'reviewed', score:'3.6',review_date:'6-11-2017'},
        {code:'16113',name:'Amazon',reviewer:'Betsy', status:'reviewed', score:'6.9',review_date:'2-11-2017'}
        ];
        $scope.question = [
        {serialno:'1',name:'Proposed Staffing Plan and people availability',weight:10,score:8},
        {serialno:'2',name:'Meetings: Customer Stand Up',weight:10,score:7},
        {serialno:'3',name:'Meetings: Customer Demo', weight:10,score:5},
        {serialno:'4',name:'Knowledge Transfer Meeting and Documentation', weight:10,score:3},
        {serialno:'5',name:'Staffing plan exist with appropriate skill set and location assigned?',weight:10,score:1},
        {serialno:'6',name:'Program plan exists and up to date?',status:'Green',weight:10,score:5},
        {serialno:'7',name:'Use Case Documentation exists per format we have defined',weight:10,score:2},
        {serialno:'8',name:'Dashboard is set up per the acceptance criteria defined in use case docs?',weight:10,score:3},
        {serialno:'9',name:'If we are in bugs fixing, is the plan setup correctly for the bugs?',weight:10,score:5},
        {serialno:'10',name:'If we have entered the QA phase, is the test report available?',weight:10,score:9},
        ];
});

