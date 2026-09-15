import {
  studentName,
  age,
  isStudent,
  studentId
} from "./types.js";

import type { Student } from "./interfaces.js";

import { getFirstElement } from "./generics.js";

import { UserRole } from "./enums.js";

import { addNumbers, multiply } from "./math.js";

import { Rectangle } from "./rectangle.js";


// ==========================
// Task 1
// ==========================


// a. Types

console.log("===== Types =====");

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// b. Union Types

console.log("===== Union Types =====");

console.log("Student ID:", studentId);


// c. Function with typed arguments and return type

console.log("===== Functions =====");

console.log("Addition:", addNumbers(10, 20));

console.log("Multiplication:", multiply(5, 4));


// d. Interfaces

console.log("===== Interface =====");

const student: Student = {
  id: 1,
  name: "Youssef",
  age: 21
};

console.log(student);


// e. Generics

console.log("===== Generics =====");

const firstNumber = getFirstElement<number>([
  10,
  20,
  30
]);

const firstName = getFirstElement<string>([
  "Ahmed",
  "Ali",
  "Youssef"
]);

console.log("First Number:", firstNumber);
console.log("First Name:", firstName);


// f. Enums

console.log("===== Enum =====");

const role: UserRole = UserRole.Doctor;

console.log("User Role:", role);


// g. Modules

console.log("===== Modules =====");

console.log("addNumbers:", addNumbers(5, 5));


// ==========================
// Task 2
// ==========================

console.log("===== Rectangle =====");

const rectangle = new Rectangle(10, 5);

console.log("Width:", rectangle.width);

console.log("Height:", rectangle.height);

console.log(
  "Circumference:",
  rectangle.CalcCircumference()
);