/** Can you explain about Interface and Enum, and where will you be using, 
please make some examples. **/

/* 
Interface
  Interfaces define properties, methods, and their types but do not implement them. They are often used to clarify and ensure the shape of the object you are going to use.

Benefits of Interfaces:

  Code correctness: Interfaces check the shape and type correctness of objects at compile time.

  Reusability: Interfaces can be reused to reduce dependencies between components, promoting modularity and flexibility.
*/

// example
interface Employee {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

class FullTimeEmployee implements Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public annualSalary: number
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const employee = new FullTimeEmployee("John", "Doe", 50000);
console.log(employee.getFullName());

/* 
  Enums are used to assign symbolic names to a set of numeric values. 

  Benefits of Enums:

  Representing a fixed set of constants: e.g., days of the week, directions, states of an object.
  Improving code readability: Replaces numeric magic values with human-readable names.
*/

enum DaysOfWeek {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

function getDayActivity(day: DaysOfWeek) {
  switch (day) {
    case DaysOfWeek.Saturday:
    case DaysOfWeek.Sunday:
      return "Holiday!!";
    default:
      return "Go to work!";
  }
}

console.log(getDayActivity(DaysOfWeek.Monday)); // Outputs: Go to work!
console.log(getDayActivity(DaysOfWeek.Sunday)); // Outputs: Holiday!!
