document.addEventListener("mouseover", function() {
  var cursorTail = document.getElementById("cursor-tail");
  cursorTail.classList.add("visible");
});

document.addEventListener("mouseout", function() {
  var cursorTail = document.getElementById("cursor-tail");
  cursorTail.classList.remove("visible");
});

document.addEventListener("mousemove", function(event) {
  var cursorTail = document.getElementById("cursor-tail");
  var xPos = event.clientX;
  var yPos = event.clientY;

  setTimeout(function() {
    cursorTail.style.left = (xPos - 75) + "px";
    cursorTail.style.top = (yPos - 75) + "px";
  }, 50);
});

const numStars = 100; // Adjust the number of stars as needed

for (let i = 0; i < numStars; i++) {
  createStar(i);
}

function createStar(index) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(star);
}