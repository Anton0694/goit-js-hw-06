

const allList = document.querySelectorAll('.item');
console.log('Number of categories: ', allList.length);
allList.forEach(category => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length);
});