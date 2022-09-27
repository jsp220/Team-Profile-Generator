const Manager = require("../lib/Manager");

describe("Manager", () => {
    const mgr = new Manager("Name", 1, "a@b.com");
    it("should create an object when called", () => {
        expect(typeof(mgr)).toEqual("object");
      });

})