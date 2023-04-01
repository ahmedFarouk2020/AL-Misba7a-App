btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "إضافة ذكر";
div = document.getElementsByTagName("div")[0];
div.append(btn);

document.addEventListener( "click" ,function (ev) {
    
    if (ev.target.classList.contains("countable")) {

        // get the next sibling (counter)
        nextSib = ev.target.nextElementSibling;

        counterVal = parseInt(nextSib.innerText);

        // increment the counter
        nextSib.textContent = `${++counterVal}`;
    } else if (ev.target.classList.contains("counter")) {
        ev.target.textContent = '0';
    } else if (ev.target.classList.contains("btn")) {
        // get data in input
        input = document.getElementsByClassName("input")[0];
        
        newZikrData = input.value;
        
        if (newZikrData === '') { return }
        // create new line (counter and zikr field)
        newZirkElement = document.querySelector(".countable").cloneNode(true);
        newZirkElement.textContent = newZikrData;
        newCounterElement = document.querySelector(".counter").cloneNode(true);
        newCounterElement.textContent = 0;
        // add zikr to new line
        div = document.getElementsByTagName("div")[0];
        
        // add the new elements to the top of div
        div.prepend(newCounterElement);
        div.prepend(newZirkElement);
        
        
        // remove data from input field
        input.value = '';
    }
})

