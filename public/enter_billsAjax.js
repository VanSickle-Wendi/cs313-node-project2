
function searchBills() {
	console.log("Searching by creditor...");

	var creditor = $("#creditor").val();
	console.log("Creditor: " + creditor);

	$.get("/search", {creditor:creditor}, function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var budget = data.list[i];

			$("#ulbudget").append("<li>" + budget.e_type + " " + budget.creditor + ":" + budget.due + " " + budget.total_owed + "</li>");
		}

	})
}


