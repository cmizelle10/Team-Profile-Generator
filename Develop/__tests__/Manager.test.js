const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jim", 40, "jim@email", 555);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1234;
  const e = new Manager("Jim", 40, "jim@email", 1234);
  expect(e.getOfficeNumber()).toBe(testValue);
});