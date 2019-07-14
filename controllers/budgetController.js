const budgetModel = require("../models/budgetModel.js");


function find(req, res) {

   var creditor = req.query.creditor;

   budgetModel.findBills(creditor, function (error, results) {
      res.json(results);
   });
}

function list(req, res) {

   budgetModel.listBillsDb(function (error, result) {
      res.status(200).json(result);
   });   
}


function categories(req, res) {

   budgetModel.categoryDb(function (error, result) {
      res.status(200).json(result);
   });   
}


function purchase(req, res) {

   var item = req.query.item;

   budgetModel.addPurchase(item, function (error, results) {
      res.json(results);
   });
}



//function addBills(req, res) {
//   var add_creditor = req.body.add_creditor;
//   console.log("Adding new bill: " + add_creditor);   
//   
//   budgetModel.addBillToDb(add_creditor, function (error, result){
//     
//   
//
//   res.json({success:true});
//     }); 
//};


function add(req, res) {
   var category = req.body.category;
   var creditor = req.body.creditor;
   console.log("Adding new bill: " + category + " " + creditor);   
   
   budgetModel.addBillToDb(category, creditor, function (error, result){
     
   res.json({result});
     }); 
};






function getExpense_Type(req, res) {
   console.log("Getting expense type information.");

   //re.params in a RESTful way and works with :id
   //var id = req.params.id;
   var id = req.query.id;
   console.log("Retrieving expense type with id: ", id);

   budgetModel.getExpense_TypeFromDb(id, function (error, result) {
      console.log("Back from the getExpense_TypeFromBb function: ", result);


      //Apparently we wouldn't really do the errors this way...
      if (error || result == null || result.length != 1) {
         res.status(500).json({success: false, data: error});
      } else {
         res.json(result[0]);
      }

   });
}

function getExpenseAll(req, res) {
   budgetModel.getExpenseAllFromDb(req.params.id, function (err, result) {
      res.status(200).json(result);
   });
}
;



module.exports = {
   find: find,
   add: add,
   getExpense_Type: getExpense_Type,
   getExpenseAll: getExpenseAll,
   purchase: purchase,
   list:list,
   categories: categories
};
