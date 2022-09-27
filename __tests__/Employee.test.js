const Employee = require("../lib/Employee");

describe("Employee", () => {
    const emp = new Employee("Name", 1, "a@b.com");
    it("should create an object when called", () => expect(typeof(emp)).toEqual("object"));
    it("should assign the first argument as a property called 'name'", () => expect(emp.name).toEqual("Name"));
    it("should assign the second argument as a property called 'id'", () => expect(emp.id).toEqual(1));
    it("should assign the third argument as a property called 'email'", () => expect(emp.email).toEqual("a@b.com"));
    it("should have a method called 'getName()' which returns the name", () => expect(emp.getName()).toEqual("Name"));
    it("should have a method called 'getId()' which returns the id", () => expect(emp.getId()).toEqual(1));
    it("should have a method called 'getEmail()' which returns the email", () => expect(emp.getEmail()).toEqual("a@b.com"));
    it("should have a method called 'getRole()' which returns the role", () => expect(emp.getRole()).toEqual("Employee"));
})