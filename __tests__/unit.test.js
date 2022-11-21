// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// matches valid phone numbers
test("returns true because (012)345-6789 is a valid phone number", () => {
    expect(functions.isPhoneNumber("(012)345-6789")).toBe(true);
});

test("returns true because 012-345-6789 is a valid phone number", () => {
    expect(functions.isPhoneNumber("012-345-6789")).toBe(true);
});

test("returns false because 012345 is not a valid phone number", () => {
    expect(functions.isPhoneNumber("012345")).toBe(false);
});

test("returns false because 122346788906790 is not a valid phone number", () => {
    expect(functions.isPhoneNumber("122346788906790")).toBe(false);
});

// matches valid emails
test("returns true because abc@gmail.com is a valid email", () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
});

test("returns true because gdietz@ucsd.edu is a valid email", () => {
    expect(functions.isEmail("gdietz@ucsd.edu")).toBe(true);
});

test("returns false because @.com is not a valid email", () => {
    expect(functions.isPhoneNumber("@.com")).toBe(false);
});

test("returns false because 123.net is not a valid email", () => {
    expect(functions.isPhoneNumber("123.net")).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least 
 * 4 characters and no more than 15 characters and no characters other than 
 * letters, numbers and the underscore may be used
 */
test("returns true because Hello1234 is a valid password", () => {
    expect(functions.isStrongPassword("Hello1234")).toBe(true);
});

test("returns true because Pass_word_0000 is a valid password", () => {
    expect(functions.isStrongPassword("Pass_word_0000")).toBe(true);
});

test("returns false because 1234Hello is not a valid password", () => {
    expect(functions.isStrongPassword("1234Hello")).toBe(false);
});

test("returns false because HelloHelloHelloHello is not a valid password", () => {
    expect(functions.isStrongPassword("HelloHelloHelloHello")).toBe(false);
});

// This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test("returns true because 1/2/2022 is a valid date", () => {
    expect(functions.isDate("1/2/2022")).toBe(true);
});

test("returns true because 10/20/2022 is a valid date", () => {
    expect(functions.isDate("10/20/2022")).toBe(true);
});

test("returns false because 1-2-2022 is not a valid date", () => {
    expect(functions.isDate("1-2-2022")).toBe(false);
});

test("returns false because 1/2/22 is not a valid date", () => {
    expect(functions.isDate("1/2/22")).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test("returns true because #FFFF00 is a valid hex code for yellow", () => {
    expect(functions.isHexColor("#FFFF00")).toBe(true);
});

test("returns true because FFC0CB is a valid hex code for pink", () => {
    expect(functions.isHexColor("FFC0CB")).toBe(true);
});

test("returns false because FFC0CB11 is not a valid hex code", () => {
    expect(functions.isHexColor("FFC0CB11")).toBe(false);
});

test("returns false because #FF is not a valid hex code", () => {
    expect(functions.isHexColor("#FF")).toBe(false);
});