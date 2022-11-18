const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listItemEl = document.querySelector('ul#ingredients')

const ingEl = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredient;

  return listItemEl;
});
listItemEl.append(...ingEl);
