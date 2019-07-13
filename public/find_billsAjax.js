
function searchBills() {
	console.log("Searching by creditor...");

	var creditor = $("#creditor").val();
	console.log("Creditor: " + creditor);

	$.get("/search", {creditor:creditor}, function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var budget = data.list[i];

			$("#tablebudget").append("<thead><tr><th scope='col'>Category</th><th scope='col'>Monthly Bill</th><th scope='col'>Monthly Payment</th><th scope='col'>Current Balance</th></tr></thead><tr><td>" + budget.e_type + "</td>" + "<td>" + budget.creditor + "</td>" + "<td>" + budget.due + "</td>" + "<td>" + budget.total_owed + "</td></tr>");
		}

	});
};



//function listBills() {
//	console.log("Listing Catagories");
//
//	var creditor = 'Mortgage';
//	console.log("Creditor: " + creditor);
//
//	$.get("/list", {creditor:creditor}, function(data) {
//		console.log("Back from the server with:");
//		console.log(data);
//
//		for (var i = 0; i < data.list.length; i++) {
//			var budget = data.list[i];
//
//			$("#tableList").append("<thead><tr><th scope='col'>Monthly Bill</th></tr></thead><tr><td>" + budget.creditor + "</td></tr>");
//		}
//
//	});
//};


function listBills() {
	console.log("Listing Catagories");

	$.get("/list", function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var budget = data.list[i];

			$("#tableList").append("<tr><td>" + budget.creditor + "</td></tr>");
		}

	});
};