var app = angular.module('productApp', []);

app.controller('ProductController', function ($scope) {
  $scope.products = [];
  $scope.newProduct = {};

  $scope.addProduct = function () {
    if ($scope.productForm.$valid) {
      $scope.products.push(angular.copy($scope.newProduct));
      $scope.newProduct = {};
      $scope.productForm.$setPristine();
    }
  };
});
