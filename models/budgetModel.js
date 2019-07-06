const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

// console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});

function searchBills(creditor, callback) {
	console.log("Searching the DB for creditor: " + creditor);

	var sql = "SELECT category e_type, creditor, due, total_owed FROM expense_type JOIN monthly_bills ON expense_type.id = monthly_bills.e_type JOIN amount ON monthly_bills.id = amount.m_bill WHERE monthly_bills.creditor=$1::text";
      
	var params = [creditor];

	pool.query(sql, params, function(err, db_results) {

		if (err) {
			throw err;
		} else {
			// We got some successful results from the DB
			// console.log("Back from the DB with: ")
			// console.log(db_results);

			var results = {
					success:true,
					list:db_results.rows
				};

			callback(null, results);			
		}

	});

}


module.exports = {

	searchBills: searchBills
};