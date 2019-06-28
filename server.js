const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');

app.set('port', (process.env.PORT || 5000));

const { Pool } = require('pg');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const connectionString = process.env.DATABASE_URL || 'postgres://yzenztejzuqtcn:45b7db1c822f4f51a191cf9516b4c7a5fdf5bcaa2fc0b357bcce3d6d8bb0c078@ec2-107-21-216-112.compute-1.amazonaws.com:5432/d9lqqa5vmtg0r2?ssl=true';

const pool = new Pool({connectionString: connectionString});

app.listen(app.get('port'), function() {
   console.log("Listening on port: ", app.get("port"));
});

