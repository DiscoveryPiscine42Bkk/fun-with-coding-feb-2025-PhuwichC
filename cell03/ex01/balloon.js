let root = document.documentElement;
let q = 0
document.getElementById("balloon").addEventListener('click', clickDiv);

function clickDiv() {
    let Size = parseInt(getComputedStyle(root).getPropertyValue("--size"));
    if ((Size + 10) > 420) {
        root.style.setProperty("--size", "200px");
    } else {
        root.style.setProperty("--size", (Size + 10) + "px");
    }
}