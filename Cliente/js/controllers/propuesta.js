app.controller('propuesta', function($scope, $http, $routeParams, $location) {
	$scope.msg = "Propuesta";
	$http({
	    method: "GET",
	    url: "https://e-parlament-server-ouruboros.c9.io/proposals/"+$routeParams.id+".json",        		    
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
	}).success(function(pro) {
	       	$scope.pro = pro;
	       	$http({
			    method: "GET",
			    url: "https://e-parlament-server-ouruboros.c9.io/scopes/"+pro.scope_id+".json",
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
			}).success(function(scope_data) {
			       	$scope.scope = scope_data;
			});
			
	       	$http({
			    method: "GET",
			    url: "https://e-parlament-server-ouruboros.c9.io/subjects/"+pro.subject_id+".json",
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
			}).success(function(subject) {
			       	$scope.subject = subject;
			});
	});
		
	$http({
	    method: "GET",
	    url: "https://e-parlament-server-ouruboros.c9.io/counter?proposal_id="+$routeParams.id,        		    
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
	}).success(function(votes) {
	       	$scope.votes = votes;
	});
	
	$scope.vote = function(vote, proposal_id){
		$http({
    	    method: "GET",
    	    url: "http://e-parlament-server-ouruboros.c9.io/votator?vote="+vote+"&proposal_id="+proposal_id,
    	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
    	}).success(function( user ) {
    	    $location.path( "/propuestas" );
    	});						
    };
});
