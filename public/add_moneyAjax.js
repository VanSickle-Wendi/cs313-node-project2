//
//$("#amountForm").on("submit", function (event) {
//   event.preventDefault();
//
//   var m_bill = $("#m_bill").val();
//   var due = $("#due").val();
//   var total_owed = $("#total_owed").val();
//
//   $.post('/addMoney', {m_bill: m_bill, due: due, total_owed: total_owed}, function (data) {
//      console.log("Back from the server with: " + m_bill + " " + due + " " + total_owed);
//      console.log(data);
//
//      $("#tableAmount").append("<tr><td>" + m_bill + "</td><td>" + due + "</td><td>" + total_owed + "</td></tr>");
//   });
//
//});

function addMonthly() {
   console.log("Adding Monthly Payments");

   $.get("/addMoney", function (data) {
      console.log(data);

      $("#tableAmount").append("<tr><th>Total Monthly Payments</th></tr>");

      var monthly = data;

      $("#tableAmount").append("<tr><td>" + monthly + "</td></tr>");

   });

};