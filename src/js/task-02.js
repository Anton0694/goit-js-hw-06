const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('ingredients');
const itemRef = document.querySelector('item');
ingredients.forEach( function () {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredients;
  itemRef.classList.add('item');
  
  console.log(itemRef)
});
