const Intern = require("../lib/Intern");

describe("Intern", () => {
    const int = new Intern("Name", 1, "a@b.com", "school");
    it("should create an object when called", () => expect(typeof(int)).toEqual("object"));
    it("should assign the first argument as a property called 'name'", () => expect(int.name).toEqual("Name"));
    it("should assign the second argument as a property called 'id'", () => expect(int.id).toEqual(1));
    it("should assign the third argument as a property called 'email'", () => expect(int.email).toEqual("a@b.com"));
    it("should have a method called 'getName()' which returns the name", () => expect(int.getName()).toEqual("Name"));
    it("should have a method called 'getId()' which returns the id", () => expect(int.getId()).toEqual(1));
    it("should have a method called 'getEmail()' which returns the email", () => expect(int.getEmail()).toEqual("a@b.com"));
    it("should have a method called 'getRole()' which returns the role", () => expect(int.getRole()).toEqual("Intern"));
    it("should have a method called 'getSchool()' which returns the name of the school", () => expect(int.getSchool()).toEqual("school"));
})