import { $HelloWorld } from "src/singletons";
import { describe, it, expect } from "vitest";

describe("test_class.ts", () => {
  describe("getStringBack()", () => {
    const instance = $HelloWorld;
    it("successfully says 'hello world'", () => {
      const response = instance.sayHello();
      expect(response).toBe("hello world");
    });
  });
});
