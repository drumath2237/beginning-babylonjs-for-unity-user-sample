import "./style.css";

import * as BABYLON from "@babylonjs/core";

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -2));

  var light = new BABYLON.DirectionalLight(
    "light",
    new BABYLON.Vector3(0, -1, 0)
  );

  var cube = BABYLON.MeshBuilder.CreateBox("box", { size: 1.0 });
  cube.position = BABYLON.Vector3.Zero();

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

