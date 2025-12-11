angular.module('myApp')
    .controller('MainController', function($scope, ItemService) {

        $scope.items = [];
        $scope.newItem = {};

        // Load all items
        $scope.loadItems = function() {
            ItemService.getItems().then(function(response) {
                $scope.items = response.data;
            });
        };

        // Add item
        $scope.addItem = function() {
            if (!$scope.newItem || !$scope.newItem.name || !$scope.newItem.description) return;

            ItemService.addItem($scope.newItem).then(function(response) {
                $scope.items.push(response.data);
                $scope.newItem = {};
            });
        };

        // DELETE item
        $scope.deleteItem = function(id) {
            if (!confirm("Are you sure you want to delete?")) return;

            ItemService.deleteItem(id).then(function() {
                $scope.items = $scope.items.filter(item => item._id !== id);
            });
        };

        // EDIT / UPDATE item
        $scope.editItem = function(item) {
            let newName = prompt("Enter new name:", item.name);
            let newDesc = prompt("Enter new description:", item.description);

            if (!newName || !newDesc) return;

            let updatedData = {
                name: newName,
                description: newDesc
            };

            ItemService.updateItem(item._id, updatedData).then(function(response) {
                item.name = response.data.name;
                item.description = response.data.description;
            });
        };

        // Load at start
        $scope.loadItems();
    });