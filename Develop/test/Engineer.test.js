const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = { github: "GitHubUser" };
  const e = new Engineer(testValue);
  expect(e.options.github).toBe(testValue.github);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer({});
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = { github: "GitHubUser" };
  const e = new Engineer(testValue);
  expect(e.getGithub()).toBe(testValue.github);
});