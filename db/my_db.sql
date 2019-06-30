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
     VALUES ('House Payment'),
            ('Car Payment'),
            ('Car Fuel'),
            ('Credit Card Payment'),
            ('Water Bill'),
            ('Phone Bill'),
            ('Electricity'),
            ('Gas'),
            ('Groceries'),
            ('Taxes'),
            ('Car Insurance'),
            ('Health Insurance'),
            ('Tithing'),
            ('Donations'),
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
            ('10', '1'),
            ('11', '1'),
            ('12', '1'),
            ('13', '1'),
            ('14', '1'),
            ('15', '1'),
            ('16', '1');


SELECT * FROM expense_type;


   housing_display INT REFERENCES expense_type(id),
   auto_display INT REFERENCES expense_type(id),
   credit_display INT REFERENCES expense_type(id),
   utility_display INT REFERENCES expense_type(id),
   food_display INT REFERENCES expense_type(id),
   tax_display INT REFERENCES expense_type(id),
   health_display INT REFERENCES expense_type(id),
   entertainment_display INT REFERENCES expense_type(id);