const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Miami@9847',
    database: 'employee_db'
})

const viewAllEmployees = () => {
    db.query("SELECT * FROM employee", (err, data) => {
        console.table(data);
        main();
    });
}

const viewAllRoles = () => {
    db.query("SELECT * FROM role", (err, data) => {
        console.table(data);
        main();
    });
}
const viewAllDepartments = () => {
    db.query("SELECT * FROM department", (err, data) => {
        console.table(data);
        main();
    });
}

const addDepartment = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the new department?"
        }
    ])
    .then((answer) => {
        db.query(`INSERT INTO department(name) VALUES ("${answer.departmentName}");`, (err, data) => {
            // console.table(data);
            console.log("New department added!")
            main();
        });
    })

}


const main = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add new Department",
                "Exit"
            ]
        }
    ])
    .then((answer) => {
        switch(answer.action){
            case "View All Employees":
                console.log("View all the employees");
                viewAllEmployees()
                break;
            case "View All Roles":
                console.log("View all the roles");
                viewAllRoles()
                break;
            case "View All Departments":
                console.log("View all the departments");
                viewAllDepartments()
                break;
            case "Add new Department":
                console.log("Adding a new department");
                addDepartment();
                break;
            default:
                console.log("Did not match any choice");
        }
    })
}




main();