const decreaseBin = document.getElementById("decrease");
const resetBin = document.getElementById("reset");
const increaseBin = document.getElementById("increase");
const countLabel= document.getElementById("countLabel");
let count = 0;

increaseBin.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBin.onclick = function(){
    count--
    countLabel.textContent = count;
}

resetBin.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}