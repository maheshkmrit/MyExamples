class Employee{
    constructor(id, name, address, salary){
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    }
}


class EmpRepo{
    records = [];

    //to add employee
    addEmployees(emp){
        this.records.push(emp)
    }

    //Read all employee
    getAllEmployees = () => this.records


}

///////////////////Testing part/////////////////////////////////////////////

let emp = new EmpRepo();
emp.addEmployees(new Employee(1001,"Kally", "Phildelphia",95600));
emp.addEmployees(new Employee(145271,"jally", "hilhia",95600));
emp.addEmployees(new Employee(1001,"Sally", "ldelphia",95600));
const data = emp.getAllEmployees();
for(key in data) console.log(data[key]);