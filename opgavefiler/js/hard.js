/* opgave 1 */

console.group("opgave 1");

const todoApp = {
  lists: [
    {
      name: "Huspligter",
      items: [
        { text: "Støvsuge", done: false },
        { text: "Vaske tøj", done: true },
        { text: "Tømme opvaskemaskinen", done: false }
      ]
    },
    {
      name: "Hunde luftning",
      items: [
        { text: "Morgen tur", done: true },
        { text: "Eftermiddagstur", done: false },
        { text: "Aftentur", done: false }
      ]
    }
  ]
};

console.log(todoApp);

console.groupEnd();
/* opgave 2 */
console.group("opgave 2");

const todoApp = {
  lists: [
    {
      name: "Huspligter",
      items: [
        { text: "Støvsuge", done: false },
        { text: "Vaske tøj", done: true },
        { text: "Tømme opvaskemaskinen", done: false }
      ]
    },
    {
      name: "Hunde luftning",
      items: [
        { text: "Morgen tur", done: true },
        { text: "Eftermiddagstur", done: false },
        { text: "Aftentur", done: false }
      ]
    }
  ]
};

function addItem(listKey, itemText) {
  // Find listen ud fra navnet
  const list = todoApp.lists.find(l => l.name === listKey);
  if (list) {
    list.items.push({ text: itemText, done: false });
  } else {
    console.log("Liste ikke fundet: " + listKey);
  }
}

addItem("Huspligter", "Gå ud med skraldet");

addItem("Hunde luftning", "Middagstur");

console.log(todoApp);

console.groupEnd();
/* opgave 3 */
console.group("opgave 3");

const todoApp = {
  lists: [
    {
      name: "Huspligter",
      items: [
        { text: "Støvsuge", done: false },
        { text: "Vaske tøj", done: true },
        { text: "Tømme opvaskemaskinen", done: false }
      ]
    },
    {
      name: "Hunde luftning",
      items: [
        { text: "Morgen tur", done: true },
        { text: "Eftermiddagstur", done: false },
        { text: "Aftentur", done: false }
      ]
    }
  ]
};

function toggleItemDone(listKey, itemNr) {

  const list = todoApp.lists.find(l => l.name === listKey);
  if (list && list.items[itemNr]) {
 
    list.items[itemNr].done = !list.items[itemNr].done;
  } else {
    console.log("Liste eller item ikke fundet");
  }
}

toggleItemDone("Huspligter", 1);

toggleItemDone("Hunde luftning", 1);

console.log(todoApp);


console.groupEnd();
