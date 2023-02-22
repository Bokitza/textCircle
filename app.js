let innerIterator = 0;
let outerIterator = 0.5;
document.querySelectorAll(".innerCircle").forEach((node) => {
  node.style.position = "absolute";
  node.style.top = "50vh";
  node.style.left = "50vw";
  node.style.transformOrigin = "left";
  node.style.rotate = innerIterator * 20 + "deg";
  node.style.display = "flex";
  innerIterator++;
});
document.querySelectorAll(".outerCircle").forEach((node) => {
  node.style.position = "absolute";
  node.style.top = "50vh";
  node.style.left = "50vw";
  node.style.transformOrigin = "left";
  node.style.rotate = outerIterator * 20 + "deg";
  node.style.display = "flex";
  outerIterator++;
});

let delay = 0;
document.querySelectorAll("p").forEach((node) => {
  node.style.animationDelay = delay * 0.03 + "s";
  delay++;
});
