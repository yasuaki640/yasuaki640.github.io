const colorTable = ["#FF0000", "#0000FF", "#00FF00", "#FF00FF", "#00FFFF", "#FFFF00", "#000000", "#FFFFFF"];
let whichColorNum = 0;

export function changeColor() {
    document.getElementById("changeColor").style.color = colorTable[whichColorNum];
    whichColorNum = (whichColorNum < colorTable.length - 1) ? whichColorNum + 1 : 0;
}

setInterval(changeColor, 300);

