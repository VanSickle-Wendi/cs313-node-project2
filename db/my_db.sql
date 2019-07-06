CREATE TABLE expense_type (
   id SERIAL PRIMARY KEY,
   category VARCHAR(50) NOT NULL
);

CREATE TABLE display (
   id SERIAL PRIMARY KEY,
   full_display INT REFERENCES expense_type(id),
   exp_type INT REFERENCES expense_type(id)
);

INSERT INTO expense_type (category)
     VALUES ('House'),
            ('Auto'),
            ('Credit Card'),
            ('Utility'),
            ('Food'),
            ('Taxes'),
            ('Tithing'),
            ('Donation'),
            ('Medical'),
            ('Entertainment');

 INSERT INTO display (full_display, exp_type)
     VALUES ('1', '1'),
            ('2', '1'),
            ('3', '1'),
            ('4', '1'),
            ('5', '1'),
            ('6', '1'),
            ('7', '1'),
            ('8', '1'),
            ('9', '1'),
            ('10', '1');


CREATE TABLE monthly_bills (
   id SERIAL PRIMARY KEY,
   e_type INT REFERENCES expense_type(id),
   creditor VARCHAR(50) NOT NULL
);

CREATE TABLE amount (
   id SERIAL PRIMARY KEY,
   m_bill INT REFERENCES monthly_bills(id),
   due MONEY,
   total_owed MONEY
);


 INSERT INTO monthly_bills (e_type, creditor)
     VALUES ('1', 'Mortgage'),
            ('2', 'Car Payment'),
            ('3', 'Chase'),
            ('4', 'Water Bill');

 INSERT INTO amount (m_bill, due, total_owed)
     VALUES ('1', '1250.95', '245,577.67'),
            ('2', '124.44', '3,618.28'),
            ('3', '50', '2,105'),
            ('4', '92.63', '0');


SELECT category, e_type, creditor, due, total_owed FROM expense_type JOIN monthly_bills ON expense_type.id = monthly_bills.e_type JOIN amount ON monthly_bills.id = amount.m_bill WHERE monthly_bills.creditor = 'Mortgage';