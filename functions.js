// Seleziona tutti gli elementi immagine nelle varie sezioni del carosello
var items = document.querySelectorAll('.carousel-center .carousel-item');
var rightItems = document.querySelectorAll('.carousel-right .carousel-item');
var leftItems = document.querySelectorAll('.carousel-left .carousel-item');
var indicators = document.querySelectorAll('#indicators span');

// Seleziona le frecce di navigazione
var right = document.querySelector('.right');
var left = document.querySelector('.left');

// Aggiunge eventi di click alle frecce per cambiare l'immagine
right.addEventListener('click', () => changeItem(1));
left.addEventListener('click', () => changeItem(-1));

// Aggiunge eventi di click agli indicatori per cambiare l'immagine
indicators.forEach((indicator, idx) => {
    indicator.addEventListener('click', () => {
        goToItem(idx);
    });
});

function changeItem(step) {
    // Trova l'indice corrente dell'immagine visibile
    const currentIdx = Array.from(items).findIndex(item => !item.classList.contains('hidden'));

    // Calcola il nuovo indice
    let newIdx = (currentIdx + step) % items.length;
    if (newIdx < 0) newIdx = items.length - 1;

    goToItem(newIdx);
}

function goToItem(index) {
    // Trova l'indice corrente dell'immagine visibile
    const currentIdx = Array.from(items).findIndex(item => !item.classList.contains('hidden'));

    // Toggle per gli indicatori e le immagini attuali
    indicators[currentIdx].classList.toggle('bg-gray-600');
    items[currentIdx].classList.toggle('hidden');
    rightItems[(currentIdx + 1) % items.length].classList.toggle('hidden');
    leftItems[(currentIdx + items.length - 1) % items.length].classList.toggle('hidden');

    // Toggle per i nuovi indicatori e le nuove immagini
    indicators[index].classList.toggle('bg-gray-600');
    items[index].classList.toggle('hidden');
    rightItems[(index + 1) % items.length].classList.toggle('hidden');
    leftItems[(index + items.length - 1) % items.length].classList.toggle('hidden');
}
