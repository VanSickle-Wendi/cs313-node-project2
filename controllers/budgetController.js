const budgetModel = require("../models/budgetModel.js");


function search(req, res) {

	var creditor = req.query.creditor;

	budgetModel.searchBills(creditor, function(error, results) {
		res.json(results);
	});
}

module.exports = {
	search: search
};
