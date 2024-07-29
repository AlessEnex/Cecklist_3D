function toggleSection(id) {
    const box = document.getElementById(id);
    const content = box.querySelector('.content');
    const isOpen = content.classList.contains('open');
    
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    const boxOffset = box.getBoundingClientRect().top + scrollOffset;
    
    if (isOpen) {
        content.classList.remove('open');
        content.style.maxHeight = null;
        content.style.padding = '0 15px'; // Riduci il padding quando la sezione è chiusa
    } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '15px'; // Aggiungi il padding quando la sezione è aperta
    }

    window.scrollTo({
        top: boxOffset - (scrollOffset - window.pageYOffset || document.documentElement.scrollTop),
        behavior: 'instant'
    });
}

function checkGuideline(event, id) {
    event.stopPropagation();
    const box = document.getElementById(id);
    const content = box.querySelector('.content');
    if (box.classList.contains('checked')) {
        box.classList.remove('checked');
    } else {
        box.classList.add('checked');
        content.classList.remove('open');
        content.style.maxHeight = null;
        content.style.padding = '0 15px'; // Riduci il padding quando la sezione è chiusa
    }
}
