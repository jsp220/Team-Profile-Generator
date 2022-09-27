const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engi = new Engineer("Name", 1, "a@b.com", "username");
    it("should create an object when called", () => expect(typeof(engi)).toEqual("object"));
    it("should assign the first argument as a property called 'name'", () => expect(engi.name).toEqual("Name"));
    it("should assign the second argument as a property called 'id'", () => expect(engi.id).toEqual(1));
    it("should assign the third argument as a property called 'email'", () => expect(engi.email).toEqual("a@b.com"));
    it("should have a method called 'getName()' which returns the name", () => expect(engi.getName()).toEqual("Name"));
    it("should have a method called 'getId()' which returns the id", () => expect(engi.getId()).toEqual(1));
    it("should have a method called 'getEmail()' which returns the email", () => expect(engi.getEmail()).toEqual("a@b.com"));
    it("should have a method called 'getRole()' which returns the role", () => expect(engi.getRole()).toEqual("Engineer"));
    it("should have a method called 'getGithub()' which returns the github username", () => expect(engi.getGithub()).toEqual("username"));
})