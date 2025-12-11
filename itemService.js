angular.module('myApp')
    .factory('ItemService', function($http) {
        const BASE_URL = "http://localhost:3001";

        return {

            // GET all items
            getItems: function() {
                return $http.get(BASE_URL + '/api/items');
            },

            // ADD new item
            addItem: function(item) {
                return $http.post(BASE_URL + '/api/items', item);
            },

            // UPDATE item by ID
            updateItem: function(id, updatedData) {
                return $http.put(BASE_URL + '/api/items/' + id, updatedData);
            },

            // DELETE item by ID
            deleteItem: function(id) {
                return $http.delete(BASE_URL + '/api/items/' + id);
            }
        };
    });