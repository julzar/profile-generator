const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee({});
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = { name: 'Alice' };
  const e = new Employee(name);
  expect(e.options.name).toBe(name.name);
});

test("Can set id via constructor argument", () => {
  const testValue = { id: 100 };
  const e = new Employee(testValue);
  expect(e.options.id).toBe(testValue.id);
});

test("Can set email via constructor argument", () => {
  const testValue = { email: "test@test.com" };
  const e = new Employee(testValue);
  expect(e.options.email).toBe(testValue.email);
});

test("Can get name via getName()", () => {
  const testValue = { name: 'Alice' };
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue.name);
});

test("Can get id via getId()", () => {
  const testValue = { id: 100 };
  const e = new Employee(testValue);
  expect(e.getId()).toBe(testValue.id);
});

test("Can get email via getEmail()", () => {
  const testValue = { email: "test@test.com" };
  const e = new Employee(testValue);
  expect(e.getEmail()).toBe(testValue.email);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee({});
  expect(e.getRole()).toBe(testValue);
});
