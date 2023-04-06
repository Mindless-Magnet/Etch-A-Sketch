const canvasdiv = document.querySelector('.canvas');
const n = document.querySelector('.thickness');

var isDrawing = false;

// default canvas
for (let i = 0; i < 16; i++) {
  var row = document.createElement('div');
  row.classList.add('row')
  canvasdiv.appendChild(row)
  for (let j = 0; j < 16; j++) {
    var items = document.createElement('div');
    items.classList.add('columns')
    row.appendChild(items);
  }
}

// coloring the default canvas
var item = document.querySelectorAll('.columns');
item.forEach(item => item.addEventListener('mousedown', function () {
  isDrawing = true;
  draw(this);
}))
item.forEach(item => item.addEventListener('mousemove', function () {
  if (isDrawing) {
    draw(this);
  }
}));
item.forEach(item => item.addEventListener('mouseup', function () {
  isDrawing = false;
}))

// for range input
let ndivs = 0

// creates new divs according to ndivs. checks for children and deletes on input.
n.addEventListener('input', function () {
  ndivs = this.value;
  if (canvasdiv.children.length > 0) {
    var row = document.querySelectorAll('.row');
    row.forEach(row => row.remove());
  }

  for (let i = 0; i < ndivs; i++) {
    var row = document.createElement('div');
    row.classList.add('row')
    canvasdiv.appendChild(row)
    for (let j = 0; j < ndivs; j++) {
      var items = document.createElement('div');
      items.classList.add('columns')
      row.appendChild(items);
    }
  }
  var item = document.querySelectorAll('.columns');
  item.forEach(item => item.addEventListener('mousedown', function () {
    isDrawing = true;
    draw(this);
  }))
  item.forEach(item => item.addEventListener('mousemove', function () {
    if (isDrawing) {
      draw(this);
    }
  }));
  item.forEach(item => item.addEventListener('mouseup', function () {
    isDrawing = false;
  }))
});

function draw(block) {
  block.style.backgroundColor = "white";
}
