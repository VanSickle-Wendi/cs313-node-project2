
function addPurchase() {
	console.log("Adding by Item...");

	var item = $("#item").val();
	console.log("Purchase: " + item);

	$.get("/purchase", {item:item}, function(data) {
		console.log("Back from the server with:");
		console.log(data);

		for (var i = 0; i < data.list.length; i++) {
			var purchase = data.list[i];

			$("#tablePurchase").append("<thead><tr><th scope='col'>Item</th><th scope='col'>Cost</th></tr></thead><tr><td>" + purchase.item + "</td>" + "<td>" + purchase.cost + "</td></tr>");
		}

	});
};




