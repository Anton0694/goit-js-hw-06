const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
ingredients.forEach( function (ingr) {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingr;
  itemRef.classList.add('item');
  ingredientsRef.append(itemRef);
  
});


