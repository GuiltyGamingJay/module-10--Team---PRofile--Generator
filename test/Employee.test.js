const Employee = require('../lib/Employee');

test('Can get name via function', () => {
    let sample = new Employee('Jerontai', 1, 'test@jest.org')
    expect(sample.getName()).toBe('Jerontai')
})
test('Can get ID via function', () => {
    let sample = new Employee('Jerontai', 1, 'test@jest.org')
    expect(sample.getId()).toBe(1)
})
test('Can get email via function', () => {
    let sample = new Employee('Jerontai', 1, 'test@jest.org')
    expect(sample.getEmail()).toBe('test@jest.org')
})