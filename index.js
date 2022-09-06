let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl);


function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    document.getElementById("count-el").innerText = 0;
    count = 1;
    console.log(count);

}

