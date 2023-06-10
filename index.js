const mysql = require('mysql2');
const inquirer = require('inquirer');
require("console.table");

//const PORT = process.env.PORT || 3306;

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'employeedb'
});

//app.listen(PORT, () => console.log(`Server started on PORT http://localhost:${PORT}`))

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startScreen();
});

function startScreen() {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "Add Employee",
            "Update Employee Role",
            "Add Role",
            "view role",
            "View Department",
            "End"]
        })
        .then(function ({ task }) {
            switch (task) {
          case "View Employees":
            viewEmployee();
            break;
        
          case "Add Employee":
            addEmployee();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            break;
  
          case "Add Role":
            addRole();
            break;

            case "view role":
              viewRole();
              break;
          
        
          case "View Department":
            viewDepartment();
            break;
  
          default:
            end();
        }
    });
}

function viewEmployee() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
          type: "input",
          message: "What's the first name of the employee?",
          name: "first_name"
        },
        {
          type: "input",
          message: "What's the last name of the employee?",
          name: "last_name"
        },
        {
          type: "input",
          message: "What is the employee's role id number?",
          name: "role_id"
        },
        {
          type: "input",
          message: "What is the manager id number?",
          name: "manager_id"
        }
      ])
      .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res) {
            if (err) throw err;
            console.table(res);
            startScreen();
        });
    });
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Which employee would you like to update?",
            name: "update"
        },
        
        {
            type: "input",
            message: "What is the new role ID?",
            name: "update_role"
        }
    ])
    .then(function(answer) {
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.update_role, answer.update],function(err, res) {if (err) throw err;
            console.table(res);
            startScreen();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the name of the role?",
            name: "role_name"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "role_salary"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "role_dpt"
        }
      ])
      .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.role_name, answer.role_salary, answer.role_dpt], function(err, res) {
            if (err) throw err;
            console.table(res);
            startScreen();
        });
    });
}

function viewRole() {
  let query = "SELECT * FROM role";
  connection.query (query, function(err, res){
    if (err) throw err;
    console.table(res);
    startScreen();
  });
}



function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });
}

function end() {
    connection.end();
    process.exit();
}

//module.exports = router;
