import { HelloWorld } from "../services/hello_world";

describe("test_class.ts", () => {
  describe("getStringBack()", () => {
    const instance = new HelloWorld();
    it("successfully says 'hello world'", () => {
      const response = instance.sayHello();
      expect(response).toBe("hello world");
    });
  });
});
