app.controller('propuestas', function($scope, $http, $location) {
	$scope.msg = "Propuestas";
	$http({
		    method: "GET",
		    url: "https://e-parlament-server-ouruboros.c9.io/proposals.json",        		    
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
		}).success(function(pros) {
		       	$scope.pros = pros;
		});
	
	
	$scope.counter = function(proposal_id){
		$http({
		    method: "GET",
		    url: "https://e-parlament-server-ouruboros.c9.io/counter?proposal_id="+proposal_id,        		    
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}        
		}).success(function(vote) {
		       	$scope.votes[proposal_id] = vote;
		});
    };
});
