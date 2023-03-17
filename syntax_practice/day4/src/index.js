const b = document.querySelector("body");

function handleWindowResize() {
  if (window.innerWidth > 1400) {
    b.style.backgroundColor = "green";
  } else if (window.innerWidth > 700) {
    b.style.backgroundColor = "purple";
  } else {
    b.style.backgroundColor = "blue";
  }
}

window.onresize = handleWindowResize;
