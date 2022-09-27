const Employee = require("../lib/Employee");

describe("Employee", () => {
    const emp = new Employee("Name", 1, "a@b.com");
    it("should create an object when called", () => {
        expect(typeof(emp)).toEqual("object");
      });

})