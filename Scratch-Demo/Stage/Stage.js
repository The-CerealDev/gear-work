/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars._16x = -142;
    this.vars._22x = 0;
    this.vars._18x = 150;
    this.vars._16rpm = 6;
    this.vars._22rpm = 4.36;
    this.vars._18rpm = 5.33;
    this.vars.speedOverall = 1;

    this.watchers._16x = new Watcher({
      label: "16x",
      style: "slider",
      visible: true,
      value: () => this.vars._16x,
      setValue: (value) => {
        this.vars._16x = value;
      },
      step: 1,
      min: -240,
      max: 240,
      x: 245,
      y: 175,
    });
    this.watchers._22x = new Watcher({
      label: "22x",
      style: "slider",
      visible: true,
      value: () => this.vars._22x,
      setValue: (value) => {
        this.vars._22x = value;
      },
      step: 1,
      min: -240,
      max: 240,
      x: 382,
      y: 176,
    });
    this.watchers._18x = new Watcher({
      label: "18x",
      style: "slider",
      visible: true,
      value: () => this.vars._18x,
      setValue: (value) => {
        this.vars._18x = value;
      },
      step: 1,
      min: -240,
      max: 240,
      x: 513,
      y: 170,
    });
    this.watchers._16rpm = new Watcher({
      label: "16rpm",
      style: "slider",
      visible: true,
      value: () => this.vars._16rpm,
      setValue: (value) => {
        this.vars._16rpm = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 243,
      y: 132,
    });
    this.watchers._22rpm = new Watcher({
      label: "22rpm",
      style: "normal",
      visible: true,
      value: () => this.vars._22rpm,
      x: 352,
      y: 133,
    });
    this.watchers._18rpm = new Watcher({
      label: "18rpm",
      style: "normal",
      visible: true,
      value: () => this.vars._18rpm,
      x: 457,
      y: 134,
    });
    this.watchers.speedOverall = new Watcher({
      label: "speed-overall",
      style: "slider",
      visible: true,
      value: () => this.vars.speedOverall,
      setValue: (value) => {
        this.vars.speedOverall = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 245,
      y: 90,
    });
  }
}
