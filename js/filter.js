const filterButtons = document.querySelector('.button-portfolio-group')
const items = document.querySelectorAll('.work-item')

filterButtons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;
  
    const filter = event.target.textContent.trim();
  
    items.forEach(item => {
      const category = item.querySelector('.sample-spec').textContent.trim();
  
      if (filter === 'All' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });