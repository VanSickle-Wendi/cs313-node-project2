function addMonthly() {
   console.log("Adding Monthly Payments");

   $.get("/addMoney", function (data) {
      console.log(data);

      $("#tableAmount").append("<tr><th>Total Monthly Payments</th></tr>");

      var monthly = data;

      $("#tableAmount").append("<tr><td>" + monthly + "</td></tr>");

   });

};



//This is for the add_money page Adding Payments
function totalDue() {
	console.log("Adding Bills");

	$.get("/totalPayments", function(data) {
		console.log("Back from the server with: " );
		console.log(data);

            var total = data.results.sum[0].sum;
            
            
            $("#tableTotalDue").append("<tr><th>Total Monthly Payments</th></tr>");

		$("#tableTotalDue").append("<tr><td>" + total + "</td></tr>");
         });
            
      };
      
      
//This is for the add_money page Adding Balances
function totalBalanceDue() {
	console.log("Adding Balances");

	$.get("/totalBalances", function(data) {
		console.log("Back from the server with: " );
		console.log(data);

            var balance = data.results.sum[0].sum;
            
            
            $("#tableTotalBalance").append("<tr><th>Total Balances Owed</th></tr>");

		$("#tableTotalBalance").append("<tr><td>" + balance + "</td></tr>");
         });
            
      };      