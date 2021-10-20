const getEmployerRole = (employeeName, employees) => {
    const person = employees.find(employee => employee.name === employeeName)
    return person.role
};


module.exports = getEmployerRole;
