const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg');

app.set('port', (process.env.PORT || 5000));

const { Pool } = require('pg');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const connectionString = process.env.DATABASE_URL || 'postgress://bvzlovwlmvybyc:428e6809e72e8ad2fee3eb1f4be3a3e6ba0c89903fa60e4b6ba8da6746bcdb3a@ec2-107-21-216-112.compute-1.amazonaws.com:5432/d93jk4ojlqvufu?ssl=true';

const pool = new Pool({connectionString: connectionString});

app.listen(app.get('port'), function() {
   console.log("Listening on port: ", app.get("port"));
});

