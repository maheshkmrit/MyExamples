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
    getAllEmployees = () => this.records;


    getEmployee(id){
        for(const emp of this.records){
            if(emp.empId == id)
            return emp;
        }
        throw `Empolyee by ID ${id} not found`
    }


    updateEmployee(emp){
        for(const empRec of this.records){
            if(empRec.empId == emp.empId){
                empRec.empAddress = emp.empAddress;
                empRec.empSalary = emp.empSalary;
                empRec.empName = emp.empName;
                return; //exit the function

            }
        }
        throw "Employee not found to update"
    }


}

///////////////////Testing part/////////////////////////////////////////////

let emp = new EmpRepo();
emp.addEmployees(new Employee(100,"Mike", "Phildelphia",60600));
emp.addEmployees(new Employee(145,"Alex", "Huston",75600));
emp.addEmployees(new Employee(11,"Harry", "lDown street",95600));

const data = emp.getAllEmployees();
for(key in data) console.log(data[key]);