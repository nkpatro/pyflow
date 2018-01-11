define([], function() {
    var Repo = function() {
    };

    Repo.prototype.load = function(path) {
    	var data = {};
    	data.path = path;
    	$.ajax({
            url: '/loadrepo',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(data),
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
        });
    }

    Repo.prototype.dump = function(path) {
    	var data = {};
    	data.path = path;
    	$.ajax({
            url: '/dumprepo',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(data),
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
        });
    }

    return Repo;
});