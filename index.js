import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Gear18Teeth from "./Gear18Teeth/Gear18Teeth.js";
import Gear22Teeth from "./Gear22Teeth/Gear22Teeth.js";
import Gear16Teeth from "./Gear16Teeth/Gear16Teeth.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Gear18Teeth: new Gear18Teeth({
    x: 150,
    y: 0,
    direction: 156,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 1,
  }),
  Gear22Teeth: new Gear22Teeth({
    x: 0,
    y: 0,
    direction: -150,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 2,
  }),
  Gear16Teeth: new Gear16Teeth({
    x: -142,
    y: 0,
    direction: -55,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 3,
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 60, // Set to 60 to make your project run faster
});
export default project;
