INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Interconnected"),
        ("Sales"),
        ("Legal");

INSERT INTO role (department_id, title, salary)
VALUES  (1, "Engineering Manager", 120000),
        (1, "Engineering Lead", 100000),
        (2, "Finance Manager", 85000),
        (2, "Accountant", 70000),
        (3, "Brand Advocate Manager", 95000),
        (3, "Brand Advocate Sr. Analyst", 82000),
        (4, "Sales Manager", 75000),
        (4, "Salesperson", 65000),
        (5, "Legal Manager", 110000),
        (5, "Lawyer", 95000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "May", 1, NULL), 
       ("Mary", "Bay", 2, 1),
       ("Kara", "Kay", 3, 1),
       ("Tony", "Tay", 4, NULL),
       ("Kori", "Loi", 5, 4),
       ("Jami", "Rae", 6, NULL),
       ("Tomy", "Joi", 7, 6),
       ("Toby", "Kes", 8, 6),
       ("Tina", "Ves", 9, NULL),
       ("Vess", "Sae", 10, 9);