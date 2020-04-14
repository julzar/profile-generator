const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = { officeNumber: 100 };
  const e = new Manager(testValue);
  expect(e.options.officeNumber).toBe(testValue.officeNumber);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager({});
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = { officeNumber: 100 };
  const e = new Manager(testValue);
  expect(e.getOfficeNumber()).toBe(testValue.officeNumber);
});