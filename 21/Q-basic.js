var fs = require('fs');
var Q = require('q');

function promiseReadFile(filename) {

    var deferred = Q.defer();
    fs.readFile(filename, function(err, data) {

        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}