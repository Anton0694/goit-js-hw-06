const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const ingredientsList = ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');
  return ingredient;
});
listEl.append(...ingredientsList);


