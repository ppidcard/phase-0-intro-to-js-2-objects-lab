// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let employee_update = {...employee};
    employee_update[key] = value;
    return employee_update;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    let employee_update = {...employee};
    delete employee_update[key];
    return employee_update;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}