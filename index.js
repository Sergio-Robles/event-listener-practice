
const coord = document.querySelector("#mouse-coords")

document.addEventListener("mousemove", event => {
    coord.innerHTML = `Mouse Position X: ${event.x}, Y: ${event.y}`;
    console.log("coordenates")
});



const clickMouse = document.querySelector("#mouse-clicks")
let countClicks = 0 

document.addEventListener("click", () => { 
    
    clickMouse.innerText = countClicks++;
    console.log(`the mouse has been clicked ${countClicks} times`)
})



const buttonClick = document.querySelector("#button-clicks");
const button = document.querySelector("button");
let buttonClickCount = 0;

button.addEventListener("click", () => {
    buttonClick.innerText = buttonClickCount++;
    console.log(`You have pressed the button ${buttonClickCount} times`)
})



const keyPress = document.querySelector("#key-press");

document.addEventListener("keydown", ()=> {
    keyPress.innerText = event.key
    console.log(`You have pressed the key: ${event.key}`)
})




const highText = document.querySelector("#text-highlighted");

document.addEventListener("selectionchange", () => {
    highText.innerText = document.getSelection()
})



const mouseOver = document.querySelector("#mouse-el-tag");
const mouseTag = document.querySelector("#mouse-el-tag");

document.addEventListener("mouseover", () => {
    mouseTag.innerText = event.target
})



const hiddenTab = document.querySelector("#tab-hide-num");
let changeTabs = 0;

document.addEventListener("visibilitychange", () => {
    changeTabs += 0.5
    hiddenTab.innerText = changeTabs
})



const userName = document.querySelector("#username");
const userNameValue = document.querySelector("#username-value");

userName.addEventListener("input", () => {
userNameValue.innerText = userName.value;
});




