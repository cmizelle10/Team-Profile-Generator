class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;

// class Shape {
//     constructor(area, perimeter) {
//       this.area = area;
//       this.perimeter = perimeter;
//     }
  
//     printInfo() {
//       console.log(`Area: ${this.area}`);
//       console.log(`Perimeter: ${this.perimeter}`);
//     }
//   }
  
//   module.exports = Shape;