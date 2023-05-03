// import { Rive } from "../node_modules/rive-canvas/rive";

// const div = document.getElementById("div");
// div.style.position = "relative";
// div.style.top = -2+"px";

const riveInstance = new rive.Rive({
  // src: "https://cdn.rive.app/animations/vehicles.riv",
  src: "/Rive_SubDir/tortoise_mascot.riv",
  // Or the path to a public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("canvas"),
  autoplay: true,
  // animations: 'Timeline 2'
  stateMachines: "State Machine 1",
      
});


const riveInstance1 = new rive.Rive({
  // src: "https://cdn.rive.app/animations/vehicles.riv",
  src: "/Rive_SubDir/dino_mascot.riv",
  // Or the path to a public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("canvas1"),
  autoplay: true,
  // animations: 'Timeline 2'
  stateMachines: "State Machine 1",
      
});