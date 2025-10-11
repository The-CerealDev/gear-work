/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gear22Teeth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gear 22 teeth", "./Gear22Teeth/costumes/gear 22 teeth.png", {
        x: 241,
        y: 241,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 94;
    this.stage.vars._22rpm = 4.36;
    while (true) {
      this.stage.vars._22x = 0;
      this.stage.vars._22rpm =
        this.toNumber(this.stage.vars._22rpm) *
        this.toNumber(this.stage.vars.speedOverall);
      this.x = this.toNumber(this.stage.vars._22x);
      for (let i = 0; i < 360; i++) {
        this.direction += 1;
        yield* this.wait(600 / (this.toNumber(this.stage.vars._22rpm) * 360));
        yield;
      }
      yield;
    }
  }
}
