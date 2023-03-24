import logo from "./logo.svg";
import styles from "./App.module.css";
import { For, Index } from "solid-js";
import content from "./content";

const numberOfStrips = 24;
const animationTime = 25;
const numberOfLetters = 230;

function generatePart() {
  const random = Math.round(Math.random() * 150);
  return content.replaceAll("\n", "").slice(random, random + numberOfLetters);
}
function App() {
  return (
    <div
      style={{
        animation: "rotate 60s linear infinite",
        background: "black",
        width: "100vw",
        height: "100vh",
        overscroll: "hidden",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        gap: "33px",
      }}
    >
      <BlackHole />
      <For each={Array(numberOfStrips).fill(1)}>
        {(_, index) => {
          return <Sentence numberOfStrips={numberOfStrips} index={index()} />;
        }}
      </For>
    </div>
  );
}

export default App;

function Sentence(props) {
  const container = {
    position: "absolute",
    top: "48%",
    left: "50%",
    height: "30px",
    padding: "8px",
    width: "50vw",
    display: "flex",
    "overflow-x": "hidden",
    "transform-origin": "left",
    "justify-content": "end",
    transform: `rotate(${props.index * (360 / props.numberOfStrips)}deg)`,
  };

  return (
    <div style={container}>
      <div
        style={{
          position: "absolute",
          right: "-100%",
          animation: `sweepLeft ${animationTime}s linear infinite`,
          color: "white",
          "font-size": "32px",
          "white-space": "nowrap",
          background: "black",
        }}
      >
        {generatePart()}
      </div>
      <div
        style={{
          position: "absolute",
          right: "-100%",
          animation: `sweepLeft ${animationTime}s linear infinite`,
          "animation-delay": animationTime / 2 + "s",
          "font-size": "32px",
          color: "white",
          "white-space": "nowrap",
          background: "black",
        }}
      >
        {generatePart()}
      </div>
    </div>
  );
}

function BlackHole({}) {
  return (
    <div
      style={{
        position: "relative",
        top: "-12px",
        "z-index": 10,
        width: "150px",
        "border-radius": "50%",
        "box-shadow": "12px 12px 44px 64px black",
        height: "150px",
        background: "black",
      }}
    ></div>
  );
}
