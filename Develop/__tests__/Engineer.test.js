const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "johngit"; 
    const e = new Engineer("john", 1, "john@email", testValue);
    expect(e.github).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bob", 3, "bob@email", "bobgit");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "test@github";
  const e = new Engineer("Dave", 10, "dave@email", "test@github");
  expect(e.getGithub()).toBe(testValue);
});