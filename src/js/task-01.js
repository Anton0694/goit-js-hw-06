const listEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.length)

listEl.forEach(foo);

function foo(category) {
    const categoryTitleEl = category.firstElementChild;
    console.log('Category:', categoryTitleEl.textContent);
    const categoryListEl = categoryTitleEl.nextElementSibling;
    console.log('Elements:', categoryListEl.childElementCount);
};