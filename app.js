fetch("https://rss.walla.co.il/feed/5700")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");
    const content = Array.from(items).map((item) => {
      let text = item.textContent.split("br/>")[1].split("</p>")[0];
      const maximumLettersInArticle = 170;
      if (text.length > maximumLettersInArticle) {
        return text.slice(0, maximumLettersInArticle);
      }
      return text;
    });

    Array(18)
      .fill(1)
      .forEach((_, index) => {
        const inner = createLine(index, content[index], true);
        const outer = createLine(index, content[index + 4], false);
        document.querySelector("#main").appendChild(inner);
        document.querySelector("#main").appendChild(outer);
      });
  });

function createLine(index, content, inner) {
  const span = document.createElement("span");
  span.classList.add("circle");
  const innerContent = document.createElement("p");
  innerContent.id = "innerContent";
  span.appendChild(innerContent);
  span.style.rotate = index * 20 + (inner ? 0 : 10) + "deg";
  span.style.display = "flex";

  //the delay between every line
  innerContent.style.animationDelay = index * 1 + (inner ? 0 : 0.5) + "s";
  innerContent.innerText = content;
  return span;
}
