import React from "react";
import Card from "./Card";

const dummyImages = [
  "/assets/react.png",
  "/assets/vue.png",
  "/assets/angular.png",
  "/assets/svelte.png",
  "/assets/node.png",
  "/assets/redux.png",
  "/assets/js.png",
  "/assets/html.png",
  "/assets/css.png",
  "/assets/git.png",
  "/assets/github.png",
  "/assets/ts.png",
  "/assets/react.png",
  "/assets/vue.png",
  "/assets/angular.png",
  "/assets/svelte.png",
  "/assets/node.png",
  "/assets/redux.png",
  "/assets/js.png",
  "/assets/html.png",
  "/assets/css.png",
  "/assets/git.png",
  "/assets/github.png",
  "/assets/ts.png",
  "/assets/react.png" // Toplam 25 görsel
];

const Board: React.FC = () => {
  return (
    <div className="card-grid">
      {dummyImages.map((img, i) => (
        <Card key={i} image={img} />
      ))}
    </div>
  );
};

export default Board;
