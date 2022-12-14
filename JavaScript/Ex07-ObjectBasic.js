//
let obj = {}//creates an object ..
obj.id = 124;
obj.name = "Mike";
obj.address = "Uk";
obj.salary = 45000;

for(proper in obj) console.log(obj[proper]);



//creating class prototype
class Employee{
    constructor(id, name, address, salary){
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;

    }
}

const empObj = new Employee(101, "Jack", "South Hempton", 45001);
