const searchInput = document.querySelector('.search-form input');
const termsList = document.querySelector('.terms-list');

searchInput.addEventListener('keyup', (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filteredTerms = Array.from(termsList.children)
    .filter((term) => term.textContent.toLowerCase().includes(searchValue));

  Array.from(termsList.children).forEach((term) => {
    term.style.display = 'none';
  });

  filteredTerms.forEach((term) => {
    term.style.display = 'block';
  });
});

const list = document.getElementById('list');
const counter = document.getElementById('counter');

// Update the counter when the page is loaded
updateCounter();

// Update the counter when an item is added or removed
list.addEventListener('DOMNodeInserted', updateCounter);
list.addEventListener('DOMNodeRemoved', updateCounter);

function updateCounter() {
  counter.textContent = list.childElementCount;
}