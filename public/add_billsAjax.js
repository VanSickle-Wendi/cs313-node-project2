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
//			$("#tableAddBill").append("<tr><td>" + add_creditor + "</td></tr>");
//		});
//};



//function addBills(event) {
//   event.preventDefault();
//   console.log("Adding new creditor...");
//
//   var creditor = $("#creditor").val();
//   console.log("Creditor: " + creditor);
//
//
//   $.post('/add', {creditor: creditor}, function (data) {
//      console.log("Back from the server with: " + creditor);
//      console.log(data);
//
//      $("#tableAddBill").append("<tr><td>" + creditor + "</td></tr>");
//   });
//};



$("#newBillForm").on("submit", function (event) {
   event.preventDefault();

   var e_type = $("#category").val();
   var creditor = $("#creditor").val();
   var due = $("#due").val();
   var total_owed = $("#total_owed").val();

   $("#tableAddBill").append("<thead><tr><th scope='col'>Category</th><th scope='col'>Monthly Bill</th><th scope='col'>Monthly Payment</th><th scope='col'>Current Balance</th></tr></thead>");

   $.post('/add', {e_type: e_type, creditor: creditor, due: due, total_owed: total_owed}, function (data) {
      console.log("Back from the server with: " + e_type + " " + creditor + " " + due + " " + total_owed);
      console.log(data);

      $("#tableAddBill").append("<tr><td>" + e_type + "</td><td>" + creditor + "</td><td>$" + due + "</td><td>$" + total_owed + "</td></tr>");
   });

});

