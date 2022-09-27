const Intern = require("../lib/Intern");

describe("Intern", () => {
    const int = new Intern("Name", 1, "a@b.com");
    it("should create an object when called", () => {
        expect(typeof(int)).toEqual("object");
      });

})