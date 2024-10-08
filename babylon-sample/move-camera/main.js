import "./style.css";

import * as BABYLON from "@babylonjs/core";

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -2));

  var light = new BABYLON.DirectionalLight(
    "light",
    new BABYLON.Vector3(0, -1, 0.5)
  );

  var cube = BABYLON.MeshBuilder.CreateBox("box", { size: 1.0 });
  cube.position = BABYLON.Vector3.Zero();

  var movingSpeed = 0.2;

  document.addEventListener("keydown", ({ key }) => {
    if (key === "ArrowRight" || key === "d") {
      camera.position.addInPlace(
        BABYLON.Vector3.Right().multiplyByFloats(
          movingSpeed,
          movingSpeed,
          movingSpeed
        )
      );
    }

    if (key == "ArrowLeft" || key === "a") {
      camera.position.addInPlace(
        BABYLON.Vector3.Left().multiplyByFloats(
          movingSpeed,
          movingSpeed,
          movingSpeed
        )
      );
    }
  });

  return scene;
};

let engine;
let canvas;

const main = () => {
  canvas = document.getElementById("renderCanvas");
  if (!canvas) {
    return;
  }

  engine = new BABYLON.Engine(canvas, true);
  const scene = createScene();

  window.addEventListener("resize", () => {
    engine.resize();
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main();

