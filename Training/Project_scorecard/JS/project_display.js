 $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });

var app = angular.module('Myapp', [])
app.controller('contrl', function($scope) {
    
        $scope.best_project = [
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',score:'8',review_date:'2-11-2017'},
        {code:'16102',name:'Active Bench (Internal)',score:'7.5',review_date:'3-11-2017'},
        {code:'16103',name:'Darden Restaurants',score:'7.2',review_date:'4-11-2017'},
        {code:'16104',name:'Mall of America',score:'6.3',review_date:'6-11-2017'},
        {code:'16111',name:'VWR International, LLC',score:'5.4',review_date:'8-11-2017'}
        ];
        $scope.worst_project = [
         {code:'16112',name:'Credit Suisse Securities LLC',score:'4.8',review_date:'2-11-2017'},
        {code:'16108',name:'Loreal Paris Global',score:'4.6',review_date:'3-11-2017'},
        {code:'16105',name:'Bayer Business & Technology Services',score:'4.2',review_date:'3-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',score:'4.1',review_date:'6-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',score:'2.3',review_date:'8-11-2017'}  
        ];
         $scope.project = [
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',score:'8',review_date:'2-11-2017'},
        {code:'16102',name:'Active Bench (Internal)',score:'7.5',review_date:'1-11-2017'},
        {code:'16103',name:'Darden Restaurants',score:'7.2',review_date:'1-11-2017'},
        {code:'16104',name:'Mall of America',score:'6.3',review_date:'6-11-2017'},
        {code:'16105',name:'Bayer Business & Technology Services',score:'4.2',review_date:'3-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',score:'4.1',review_date:'1-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',score:'2.3',review_date:'2-11-2017'},
        {code:'16108',name:'Loreal Paris Global',score:'4.6',review_date:'6-11-2017'},
        {code:'16109',name:'walgrence, N.A.',score:'5.6',review_date:'2-11-2017'},
        {code:'16110',name:'keybank',score:'4.8',review_date:'4-11-2017'},
        {code:'16111',name:'JCbenny',score:'8.2',review_date:'2-11-2017'},
        {code:'16112',name:'Photon labs',score:'3.6',review_date:'6-11-2017'},
        {code:'16113',name:'Amazon',score:'6.9',review_date:'2-11-2017'}
        ];
         $scope.admin_name="  Kalpana ";
         $scope.reviewer_name="  Parthasarathy";
});
