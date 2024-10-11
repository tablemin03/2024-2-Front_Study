const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const tenIncButton = document.getElementById("tenIncrease");
const tenDecButton = document.getElementById("tenDecrease");

let count = 0;
number.textContent = count;

function increaseCount(x) {
    count += x;
    showNumber();
}
function decreaseCount(x){
    count -= x;
    showNumber();
}
function resetCount(){
    count = 0;
    showNumber();
}

function showNumber(){
    if(count > 0){
        number.style.color = `rgba(${count * 5},0,0)`;
    }
    else if(count < 0){
        number.style.color = `rgba(0,${- count * 5},0)`;
    }
    else number.style.color = `rgba(0,0,0)`;
    number.textContent = count;
}

tenIncButton.addEventListener("click", () => increaseCount(10));
incButton.addEventListener("click", () => increaseCount(1));
tenDecButton.addEventListener("click", () => decreaseCount(10));
decButton.addEventListener("click", () => decreaseCount(1));
resetButton.addEventListener("click", resetCount);