function createEmployeesList(array){
    let employees = [];
    for (let i = 0; i < array.length; i++) {
        let employee = {name: array[i],
        personalNumber: array[i].length}
        employees.push(employee);
    }
    employees.forEach(employee => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    });
}