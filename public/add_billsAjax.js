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

   var category = $("#category").val();
   var creditor = $("#creditor").val();
   
   alert(category, creditor);
      $.post('/add', {category: category, creditor: creditor}, function (data) {
      console.log("Back from the server with: " + category + " " + creditor);
      console.log(data);

      $("#tableAddBill").append("<tr><td>" + category + "</td><td>" + creditor + "</td></tr>");
   });
   
});

