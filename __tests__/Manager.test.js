const Manager = require("../lib/Manager");

describe("Manager", () => {
    const mgr = new Manager("Name", 1, "a@b.com", 2);
    it("should create an object when called", () => expect(typeof(mgr)).toEqual("object"));
    it("should assign the first argument as a property called 'name'", () => expect(mgr.name).toEqual("Name"));
    it("should assign the second argument as a property called 'id'", () => expect(mgr.id).toEqual(1));
    it("should assign the third argument as a property called 'email'", () => expect(mgr.email).toEqual("a@b.com"));
    it("should have a method called 'getName()' which returns the name", () => expect(mgr.getName()).toEqual("Name"));
    it("should have a method called 'getId()' which returns the id", () => expect(mgr.getId()).toEqual(1));
    it("should have a method called 'getEmail()' which returns the email", () => expect(mgr.getEmail()).toEqual("a@b.com"));
    it("should have a method called 'getRole()' which returns the role", () => expect(mgr.getRole()).toEqual("Manager"));
    it("should have a method called 'getOfficeNumber()' which returns the office number", () => expect(mgr.getOfficeNumber()).toEqual(2));
})