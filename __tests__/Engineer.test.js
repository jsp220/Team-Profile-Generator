const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create an object when called", () => {
        const engi = new Engineer("Name", 1, "a@b.com");
  
        // Assert
        expect(typeof(engi)).toEqual("object");
      });

})