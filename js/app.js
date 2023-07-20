baguetteBox.run('.grid');
// const search = new Filter('search', 'data-caption');


// Search Filter original code

const search = document.getElementById(`search`);
search.addEventListener('keyup', e => {
    let searchValue = e.target.value.toLowerCase();
    let cards = document.querySelectorAll('a.imgcard');
    cards.forEach(card => {
        if (card.textContent.toLocaleLowerCase().includes(searchValue)) {
            card.parentNode.style.display = 'grid';
        } else {
            card.parentNode.style.display = 'none';
        }
    });
});
