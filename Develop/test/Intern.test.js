const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = { school: "UCLA" };
  const e = new Intern(testValue);
  expect(e.options.school).toBe(testValue.school);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern({});
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = { school: "UCLA" };
  const e = new Intern(testValue);
  expect(e.getSchool()).toBe(testValue.school);
});