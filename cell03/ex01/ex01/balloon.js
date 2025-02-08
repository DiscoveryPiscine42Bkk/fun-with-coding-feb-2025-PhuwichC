let root = document.documentElement;
let colorarray = ["red", "green", "blue"]
let colorindex = 0
document.getElementById("balloon").addEventListener('click', clickDiv);

function clickDiv() {
    let size = parseInt(getComputedStyle(root).getPropertyValue("--size"));
    if ((size + 10) > 420) {
        root.style.setProperty("--size", "200px");
    } else {
        root.style.setProperty("--size", (size + 10) + "px");
    }
    colorindex++;
    if (colorindex > 2) {
        colorindex = 0;
    }
    color = colorarray[colorindex];
    root.style.setProperty("--color", color);
}

function shrink() {
    let size = parseInt(getComputedStyle(root).getPropertyValue("--size"));
    if (size > 199){
        root.style.setProperty("--size", (size - 5) + "px");
    }
    colorindex--;
    if (colorindex < 0) {
        colorindex = 2;
    }
    color = colorarray[colorindex];
    root.style.setProperty("--color", color);
}
