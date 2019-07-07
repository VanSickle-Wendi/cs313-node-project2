const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;


// console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function searchBills(creditor, callback) {
   console.log("Searching the DB for creditor: " + creditor);

   var sql = "SELECT category e_type, creditor, due, total_owed FROM expense_type JOIN monthly_bills ON expense_type.id = monthly_bills.e_type JOIN amount ON monthly_bills.id = amount.m_bill WHERE monthly_bills.creditor=$1::text";

   var params = [creditor];

   pool.query(sql, params, function (err, db_results) {

      if (err) {
         throw err;
      } else {
         var results = {
            success: true,
            list: db_results.rows
         };

         callback(null, results);
      }
   });
}

function addPurchase(item, callback) {
   console.log("Adding purchase " + item);

   var sql2 = "INSERT INTO purchase (item) VALUES ('${item.item}) WHERE purchase.item=$1::text;";

   var params = [item];

   pool.query(sql2, params, function (err, db_results) {

      if (err) {
         throw err;
      } else {
         var results = {
            success: true,
            list: db_results.rows
         };

         callback(null, results);
      }
   });
}



//function addBillToDb(add_creditor, callback) {
//   console.log("Inserting " + add_creditor);
//
//   var sql2 = "BEGIN; INSERT INTO monthly_bills (e_type, @creditor) VALUES ('5', `add_creditor``); INSERT INTO amount (m_bill, due, total_owed) VALUES ('5', '175', '0'); COMMIT;";
//
//   var params = [add_creditor];
//
//   pool.query(sql2, params, function (err, db_results) {
//      if (err) {
//         throw err;
//      } else {
//         var results = {
//            success: true,
//            list: db_results.rows
//         };
//
//         callback(null, results);
//      }
//
//   });
//}
//;

function getExpense_TypeFromDb(id, callback) {
   console.log("getExpense_TypeFromDb called with id ", id);

   var sql = "SELECT id, category FROM expense_type WHERE id = $1::int";
   var params = [id];

   pool.query(sql, params, function (err, result) {
      if (err) {
         console.log("An error with the DB occurred");
         console.log(err);
         callback(err, null);
      }
      console.log("Found DB result: " + JSON.stringify(result.rows));

      callback(null, result.rows);
   });
}

function getExpenseAllFromDb(id, callback) {
   var sql = "SELECT full_display FROM display WHERE exp_type = $1::int";
   var params = [id];
   pool.query(sql, params, function (err, result) {
      if (err) {
         console.log(err);
      }
      callback(null, result.rows);
   });
}



module.exports = {

   searchBills: searchBills,
//   addBillToDb: addBillToDb,
   getExpense_TypeFromDb: getExpense_TypeFromDb,
   getExpenseAllFromDb: getExpenseAllFromDb,
   addPurchase: addPurchase
};




//
//router.post('/users', function(req, res, next) {
//
//    client.query('INSERT INTO users(username, password) VALUES($1, $2) returning id', 
//    [req.body.username, req.body.password], function(err, result) {
//      done();
//      if(err) {
//        return console.error('error running query', err);
//      }
//      res.send(result);
//    });
//  });
//});