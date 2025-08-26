/* Opgave 1*/
console.group("opgave 1");

const data = {
  items: ["æble", "banan", "pære", "appelsin", "mango"]
};

data.items.push("jordbær");

console.log(data);

console.groupEnd();



/*opgave 2*/
console.group("opgave 2");

const data = {
  items: ["æble", "banan", "pære", "appelsin", "mango"]
};

data.items.splice(1, 1);

console.groupEnd();


/*opgave 3*/
console.group("opgave 3");

const data = {
  items: ["æble", "banan", "pære", "appelsin", "mango"]
};

data.items[2] = "changed";

console.log(data);

console.groupEnd();




