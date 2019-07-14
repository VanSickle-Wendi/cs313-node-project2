const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');
require('dotenv').config();


const budgetController = require("./controllers/budgetController.js");

app.set('port', (process.env.PORT || 5000));

const { Pool } = require('pg');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/find", budgetController.find);

app.post('/add', budgetController.add);

app.get('/getExpense_Type', budgetController.getExpense_Type);

app.get('/getExpenseAll/:id', budgetController.getExpenseAll);

app.get('/purchase', budgetController.purchase);

app.get('/list', budgetController.list);

app.get('/categories', budgetController.categories);



app.listen(app.get('port'), function() {
   console.log("Listening on port: ", app.get("port"));
});


