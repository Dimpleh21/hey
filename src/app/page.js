"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Assets, Sprite, Container } from "pixi.js";
import Application from "pixi.js";
export default function Home() {
  return (
    <div>
      <header className="header">
        <h1 className="heading">DRESSING ROOM</h1>
      </header>

      <Header />
    </div>
  );
}
const OutfitData = [
  {
    id: 1,
    image: "t8.png",
  },
  {
    id: 2,
    image: "t18.png",
  },
  {
    id: 3,
    image: "t24.png",
  },
  {
    id: 4,
    image: "t2.png",
  },
  {
    id: 5,
    image: "t17.png",
  },
  {
    id: 6,
    image: "t16.png",
  },
  {
    id: 7,
    image: "t15.png",
  },
  {
    id: 8,
    image: "t14.png",
  },
  {
    id: 9,
    image: "t22.png",
  },
  {
    id: 10,
    image: "t20.png",
  },
];

function Header() {
  return (
    <div>
      <ul className="pizzas">
        {OutfitData.map((cloth) => (
          <Item ItemObj={cloth} key={cloth.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ ItemObj }) {
  const [canvasItems, setCanvasItems] = useState([]);

  const handleButtonClick = () => {
    setCanvasItems((prevItems) => [
      ...prevItems,
      <Canvas item={ItemObj} key={ItemObj.id} />,
    ]);
  };

  return (
    <div className="Container">
      <li className="pizza">
        <img src={ItemObj.image} alt={ItemObj.id} />
        <button onClick={handleButtonClick}>+</button>
      </li>
      <div>{canvasItems}</div>
    </div>
  );
}

function Container1() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Canvas({ item }) {
  useEffect(() => {
    const initPixi = async () => {
      const container = document.createElement("div");
      container.style.position = "relative";
      container.style.width = "100%";
      container.style.height = "400px";
      document.body.appendChild(container);

      const app = new Application({
        antialias: true,
        backgroundColor: 0xffffff,
        resizeTo: container,
        useContextAlpha: false,
      });

      container.appendChild(app.canvas);

      const pandaTexture = await Assets.load("stells.png");
      const itemTexture = await Assets.load(item.image);

      const sprite = new Sprite(pandaTexture);
      sprite.width = 200;
      sprite.height = 450;
      sprite.anchor.set(0.4);
      sprite.position.set(200, 150);

      const sprite2 = new Sprite(itemTexture);
      sprite2.width = 387;
      sprite2.height = 475;
      sprite2.position.set(50, 50);

      const pixiContainer = new Container();
      pixiContainer.addChild(sprite, sprite2);
      app.stage.addChild(pixiContainer);

      app.ticker.add(() => {
        // Your animation logic here
      });

      return () => {
        app.destroy(true, { children: true });
        document.body.removeChild(container);
      };
    };

    initPixi();
  }, [item]);

  return null;
}
