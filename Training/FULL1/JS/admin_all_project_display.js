app.controller('contrl', function($scope,$location)
{
    $scope.go=function(page) 
   {
                     $location.path('/' + page );
    };
    $scope.deli_manager = []
    $scope.add_delivery_manager = function() 
    {
                          $scope.deli_manager.push({ name:$scope.Deliname
                                                   })
    }

     $scope.account_name = []
    $scope.add_accounts = function() 
    {
                          $scope.account_name.push({ name:$scope.accountsname
                                                   })
    }
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
        {code:'16113',name:'Amazon',reviewer:'Betsy', status:'reviewed', score:'6.9',review_date:'2-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga', status:'pending', score:'4.1',review_date:'1-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini', status:'reviewed', score:'2.3',review_date:'2-11-2017'}
        ]; 
        $scope.Reviewed_project = [
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',reviewer:'Parthasarathy', score:'8',review_date:'2-11-2017'},
        {code:'16102',name:'Active Bench (Internal)', reviewer:'Subadharshini', score:'7.5',review_date:'1-11-2017'},
        {code:'16103',name:'Darden Restaurants',reviewer:'Betsy', score:'7.2',review_date:'1-11-2017'},
        {code:'16104',name:'Mall of America',reviewer:'Parthasarathy', score:'6.3',review_date:'6-11-2017'},
        {code:'16105',name:'Bayer Business & Technology Services',reviewer:'Bharathi', score:'4.2',review_date:'3-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga', score:'4.1',review_date:'1-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini', score:'2.3',review_date:'2-11-2017'},
        {code:'16108',name:'Loreal Paris Global',reviewer:'Bharathi', score:'4.6',review_date:'6-11-2017'},
        {code:'16109',name:'walgrence, N.A.',reviewer:'Durga', score:'5.6',review_date:'2-11-2017'},
        {code:'16110',name:'keybank',reviewer:'Betsy', score:'4.8',review_date:'4-11-2017'},
        {code:'16111',name:'JCbenny',reviewer:'parthasarathy', score:'8.2',review_date:'2-11-2017'},
        {code:'16112',name:'Photon labs',reviewer:'Bharathi', score:'3.6',review_date:'6-11-2017'},
        {code:'16113',name:'Amazon',reviewer:'Betsy', score:'6.9',review_date:'2-11-2017'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga', score:'4.1',review_date:'1-11-2017'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini', score:'2.3',review_date:'2-11-2017'}
        ]; 
       $scope.Not_Reviewed_project = [
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini'},
        {code:'16108',name:'Loreal Paris Global',reviewer:'Bharathi'},
        {code:'16109',name:'walgrence, N.A.',reviewer:'Durga'},
        {code:'16110',name:'keybank',reviewer:'Betsy'},
        {code:'16111',name:'JCbenny',reviewer:'parthasarathy'},
        {code:'16101',name:'Delivery &gt; Walgreen Co. (-) Retail Renewal &gt',reviewer:'Parthasarathy'},
        {code:'16102',name:'Active Bench (Internal)', reviewer:'Subadharshini'},
        {code:'16103',name:'Darden Restaurants',reviewer:'Betsy'},
        {code:'16104',name:'Mall of America',reviewer:'Parthasarathy'},
        {code:'16113',name:'Amazon',reviewer:'Betsy'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga'},
        {code:'16107',name:'JPMorgan Chase Bank, N.A.',reviewer:'Subadharshini'},
        {code:'16105',name:'Bayer Business & Technology Services',reviewer:'Bharathi'},
        {code:'16106',name:'Samsung Electronics Co.,LTD',reviewer:'Durga'},
        {code:'16112',name:'Photon labs',reviewer:'Bharathi'}
        
        ]; 



           $scope.startIndex=1;
           $scope.endIndex=10;
           $scope.noOfPages = [];
           $scope.noOfPages.length = Math.ceil($scope.project.length / 10);
           $scope.totalpages= $scope.noOfPages.length*10;
           $scope.change=function()
           {
               $scope.startIndex=$scope.startIndex+10;
               $scope.endIndex=$scope.endIndex+10;
      
          };
            $scope.previous=function(){
            $scope.startIndex=$scope.startIndex-10;
            $scope.endIndex=$scope.endIndex-10;
     
       };

       $scope.loadRecordsPerPage = function(index){
            $scope.startIndex=(10 * index)-9;
            $scope.endIndex=10*index;
       };
        $scope.range = function(min, max, step) {
        step = step || 1;
       var input = [];
       if(max<$scope.project.length)
       {
          for (var i = min; i <= max; i += step) {
            input.push(i);
       }
       }
       else
       {
        for (var i = min; i <$scope.project.length; i += step) {
            input.push(i);
       }
     }
       return input;
}; //ajax request to fetch data into $scope.data
});
