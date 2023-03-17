const searchInput = document.querySelector('.search-form input');
const listItems = document.querySelectorAll('.terms-list li');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    const itemMatches = text.includes(searchTerm);
    
    if (itemMatches) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
