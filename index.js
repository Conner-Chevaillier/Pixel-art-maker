var cells = [];
var color = "white";
var grid = document.querySelector(".grid");
var selectedColor = "white";

document.addEventListener("DOMContentLoaded", function() {
  MakeGrid();
  MakePalette();
  console.log(cells);
});
function MakeGrid() {
  for (x = 0; x < 33; x++) {
    var row = document.createElement("tr");
    for (y = 0; y < 50; y++) {
      var td = document.createElement("td");
      var cell = MakeCell(td);
      cells.push((cell = { pixel: cell, xPos: x, yPos: y }));
      row.appendChild(td);
    }
    grid.appendChild(row);
  }
}
function MakeCell(cellParent) {
  cell = document.createElement("div");
  cell.className = "cell";
  cell.style.backgroundColor = color;
  cell.addEventListener("click", function() {
    this.style.backgroundColor = selectedColor;
  });
  cellParent.appendChild(cell);
  return cell;
}
function MakePalette() {
  var palette = document.querySelector("ul.colors");
  var currentColor = document.createElement("div");
  currentColor.className = "current-color";
  currentColor.style.backgroundColor = selectedColor;
  document
    .querySelector(".palette")
    .insertBefore(currentColor, document.querySelector(".palette").children[1]);

  var colors = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "lightgreen",
    "chartreuse",
    "blue",
    "lightblue",
    "indigo",
    "purple",
    "violet",
    "black",
    "grey",
    "brown"
  ];
  for (i = 0; i < colors.length; i++) {
    var colorCell = document.createElement("li");
    var color = document.createElement("div");
    color.style.backgroundColor = colors[i];
    color.className = "color";
    color.addEventListener("click", function() {
      selectedColor = this.style.backgroundColor;
      currentColor.style.backgroundColor = selectedColor;
    });
    colorCell.appendChild(color);
    palette.appendChild(colorCell);
  }
}
