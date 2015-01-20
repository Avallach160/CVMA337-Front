(function() {
    'use strict';

    angular.module('cvma').factory('webRequest', webRequest);

    /* @ngInject */
    function webRequest($http, $q) {
        var service = {
            request: request
        };
        return service;

        ////////////////

        function request(url, verb, data, params, cache) {
            var deferred = $q.defer();
            $http({
                method: (verb) ? verb : 'GET',
                url: url,
                data: data,
                params: params,
                withCredentials: true,
                cache: (cache)
            }).success(function(response) {
                deferred.resolve(response.value || response.data || response);
            }).error(function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }
})();