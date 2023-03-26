btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "إضافة ذكر";
document.body.append(btn);

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
        console.log(input);
        newZikrData = input.value;
        console.log(newZikrData)
        // create new line (counter and zikr field)
        newZirkElement = document.querySelector(".countable").cloneNode(true);
        newZirkElement.textContent = newZikrData;
        newCounterElement = document.querySelector(".counter").cloneNode(true);
        // add zikr to new line
        div = document.getElementsByTagName("div")[0];
        
        div.appendChild(newZirkElement);
        
        div.appendChild(newCounterElement);
    }
})

