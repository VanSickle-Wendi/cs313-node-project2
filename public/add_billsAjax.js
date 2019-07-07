//
//function addBills() {
//	console.log("Adding new creditor...");
//
//	var add_creditor = $("#add_creditor").val();
//	console.log("Creditor: " + add_creditor);
//
//	$.get('/addBills', {add_creditor:add_creditor}, function(data) {
//		console.log("Back from the server with: ");
//		console.log(data);
//
//		for (var i = 0; i < data.list.length; i++) {
//			var add_bill = data.list[i];
//
//			$("#tableAddBill").append("<thead><tr><th scope='col'>Category</th><th scope='col'>Monthly Bill</th><th scope='col'>Monthly Payment</th><th scope='col'>Current Balance</th></tr></thead><tr><td>" + add_bill.e_type + "</td>" + "<td>" + add_bill.creditor + "</td>" + "<td>" + add_bill.due + "</td>" + "<td>" + add_bill.total_owed + "</td></tr>");
//		}
//
//	});
//};





