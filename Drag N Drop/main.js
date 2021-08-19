const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill Event Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop Through Empties And Class Drag Event
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Function
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className += "invisible"),0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
