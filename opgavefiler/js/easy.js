/* opgave 1 */
console.group("opgave 1");

const person = {
  name: "Jack",
  age: 26,
  job: "Elev"
};

console.log(person);

console.groupEnd();

/* opgave 2 */
console.group("opgave 2");

const person = {
  name: "Jack",
  age: 26,
  job: "Elev"
};

console.log(person.name);

console.log(person.job);

console.log(person.name + " arbejder som " + person.job.toLowerCase());

console.groupEnd();

/* opgave 3 */
console.group("opgave 3");

const person = {
  name: "Jack",
  age: 26,
  job: "Elev"
};

delete person.age;

console.log(person);

console.groupEnd();
