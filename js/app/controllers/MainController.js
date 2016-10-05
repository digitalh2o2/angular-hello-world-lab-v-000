function MainController($scope) {
  $scope.name = "Saul";
  $scope.email = "test@gmail.com";
  $scope.phone = "555-555-5555";
}

angular
  .module('app')
  .controller("MainController", MainController)
