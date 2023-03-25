document.addEventListener( "click" ,function (ev) {
    
    if (ev.target.classList.contains("countable")) {

        // get the next sibling (counter)
        nextSib = ev.target.nextElementSibling;

        counterVal = parseInt(nextSib.innerText);

        // increment the counter
        nextSib.textContent = `${++counterVal}`;
    }
})
