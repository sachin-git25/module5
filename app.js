(function(){

    angular.module("myApp",[])
    .controller("myController", changeHtml);

    function changeHtml($scope,$filter){
        $scope.foodname="What do you want to eat";
        $scope.toCap = function (){
        var createFilter= $filter("uppercase");
        $scope.foodname=createFilter($scope.foodname);
        };

        $scope.photodefault = "happy";
        //change the photo

        $scope.photoChange = function(){
            $scope.photodefault = "grumpy";
            return  $scope.photoChange
            console.log($scope.photodefault);
        };


}

})();