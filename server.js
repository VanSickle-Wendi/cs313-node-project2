const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');

const budgetController = require("./controllers/budgetController.js");

app.set('port', (process.env.PORT || 5000));

const { Pool } = require('pg');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const connectionString = process.env.DATABASE_URL || 'postgres://yzenztejzuqtcn:45b7db1c822f4f51a191cf9516b4c7a5fdf5bcaa2fc0b357bcce3d6d8bb0c078@ec2-107-21-216-112.compute-1.amazonaws.com:5432/d9lqqa5vmtg0r2?ssl=true';

const pool = new Pool({connectionString: connectionString});

app.get("/search", budgetController.search);

app.get('/register');
app.get('/login');
app.get('/bills');

app.get('/one_bill');


app.get('/income');
app.get('/purchase');
app.get('/goals');

app.get('/getExpense_Type', getExpense_Type);

app.get('/getExpenseAll/:id', function(req,res){
    getExpenseAllFromDb(req.params.id, function(err, result){
        res.status(200).json(result);
    });
  });



app.listen(app.get('port'), function() {
   console.log("Listening on port: ", app.get("port"));
});

function getExpense_Type(req, res) {
   console.log("Getting expense type information.");
   
   //re.params in a RESTful way and works with :id
   //var id = req.params.id;
   var id = req.query.id;
   console.log("Retrieving expense type with id: ", id);
   
   getExpense_TypeFromDb(id, function(error, result) {
     console.log("Back from the getExpense_TypeFromBb function: ", result); 
     
     
     //Apparently we wouldn't really do the errors this way...
      if (error || result == null || result.length != 1) {
         res.status(500).json({success:false, data: error});
      } else {
         res.json(result[0]);
      }      

   });
}

function getExpense_TypeFromDb(id, callback) {
   console.log("getExpense_TypeFromDb called with id ", id);
   
   var sql = "SELECT id, category FROM expense_type WHERE id = $1::int";
   var params = [id];
   
   pool.query(sql, params, function(err, result) {
      if (err) {
         console.log("An error with the DB occurred");
         console.log(err);
         callback(err, null);
      }
      console.log("Found DB result: " + JSON.stringify(result.rows));
      
      callback(null, result.rows);
   });
}


function getExpenseAllFromDb(id, callback){
    var sql = "SELECT full_display FROM display WHERE exp_type = $1::int";
    var params = [id];
    pool.query(sql, params, function(err, result){
        if(err){ console.log(err); }
        callback(null, result.rows);
    });
}



