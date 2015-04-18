app.controller('addPropuesta', function($scope, $http, $location) {
	$http({
	    method: "GET",
	    url: "https://e-parlament-server-ouruboros.c9.io/scopes.json",        		    
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
	}).success(function(scopes) {
	       	$scope.scopes = scopes;
	});
	
	$http({
	    method: "GET",
	    url: "https://e-parlament-server-ouruboros.c9.io/subjects.json",        		    
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
	}).success(function(subjects) {
	       	$scope.subjects = subjects;
	});
	
    $scope.create = function(){
		$http({
    	    method: "GET",
    	    url: "http://e-parlament-server-ouruboros.c9.io/creador?title="+$scope.proposal.title+"&object="+$scope.proposal.object+"&finality="+$scope.proposal.finality+"&subject_id="+$scope.proposal.subject.id+"&scope_id="+$scope.proposal.scope.id,
    	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
    	}).success(function( user ) {
    	    $location.path( "/propuestas" );
    	});						
    };
    
});
