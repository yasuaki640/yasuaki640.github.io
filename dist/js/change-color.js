"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeColor = changeColor;

function changeColor() {
  function setRandomColor() {
    var rValue = Math.floor(Math.random() * 255);
    var gValue = Math.floor(Math.random() * 255);
    var bValue = Math.floor(Math.random() * 255);
    document.getElementById("changingColor").style.color = "rgb(".concat(rValue, ",").concat(gValue, ",").concat(bValue, ")");
  }

  setInterval(setRandomColor, 100);
}