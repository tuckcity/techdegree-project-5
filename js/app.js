baguetteBox.run('.grid');
// const search = new Filter('search', 'data-caption');


// Search Filter original code

const searchBar = document.getElementById(`search`);
searchBar.addEventListener('keyup', e => {
    let searchValue = e.target.value.toLowerCase();
    let card = document.querySelectorAll('a.imgcard');
    card.forEach(card => {
        let dataCap = card.getAttribute('data-caption');
        if (dataCap.toLowerCase().includes(searchValue)) {
            card.style.display = 'grid';
        } else {
            card.style.display = 'none';
        }
    });
});

