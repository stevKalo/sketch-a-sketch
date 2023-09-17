const container = document.querySelector(".container");

function setActive(obj) {
  obj.classList.add("active");
}

function createGrid(num) {
  for (let j = 0; j < num; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 0; i < num; i++) {
      const newDiv = document.createElement("div");
      newDiv.addEventListener("mouseover", () => {
        setActive(newDiv);
      });
      newDiv.classList.add("block");
      row.appendChild(newDiv);
    }
  }
}
createGrid(16);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let x = prompt("How big do you want the grid?");
  if (x > 200) {
    alert("That's too big!");
  } else {
    const row = document.querySelector(".row");
    while (row.firstChild) {
      row.removeChild(row.lastChild);
    }
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
  }

  createGrid(x);
});

/* 
take number x
make a row that is x long
duplicate row x times

function (
  make x rows (
    make x row items
  )
)
*/
