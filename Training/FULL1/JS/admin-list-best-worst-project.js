app.controller('best_worst_contrl', function($scope,$rootScope) {
    $rootScope.employee_designation = true;
        $scope.worst_project = [
         {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Betsy',reviewed_date:'12-11-2017',reviewscore:'5',status:'Reviewed'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Kiran',reviewed_date:'31-01-2017',reviewscore:'4',status: 'Pending'},
        {code:'16108',name:'Loreal Paris Global',reviewer:'Partha',reviewed_date:'02-11-2017',reviewscore:'3',status: 'Reviewed'},
        {code:'16109',name:'walgrence, N.A.',reviewer:'Saranya',reviewed_date:'15-07-2016',reviewscore:'2.6',status: 'Pending'},
        {code:'16110',name:'keybank',reviewer:'Mohan',reviewed_date:'19-06-2015',reviewscore:'2.2',status: 'Reviewed'}
        
        ];
         $scope.best_project = [
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',reviewer:'Suba',reviewed_date:'02-05-2017',reviewscore:'8', status:'Reviewed'},
        {code:'16102',name:'Active Bench (Internal)',reviewer:'Dharshini',reviewed_date:'1-11-2017',reviewscore:'7',status:'Pending'},
        {code:'16103',name:'Darden Restaurants',reviewer:'Rahul',reviewed_date: '05-12-2016',reviewscore:'7.3',status:'Reviewed'},
        {code:'16104',name:'Mall of America',reviewer:'Sanjay',reviewed_date: '07-01-2017',reviewscore:'6',status: 'Pending'},
        {code:'16105',name:'Bayer Business & Technology Services',reviewer:'Bharathi',reviewed_date:'01-12-2016',reviewscore:'5.2',status:'Reviewed'}
        ];
});
