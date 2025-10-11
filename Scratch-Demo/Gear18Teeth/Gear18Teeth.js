/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gear18Teeth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gear 18 teeth", "./Gear18Teeth/costumes/gear 18 teeth.png", {
        x: 201,
        y: 201,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speedOverall = 1;
    this.direction = -74;
    this.x = this.toNumber(this.stage.vars._18x);
    this.stage.vars._18rpm = 5.33;
    while (true) {
      this.stage.vars._18x = 150;
      this.stage.vars._18rpm =
        this.toNumber(this.stage.vars._18rpm) *
        this.toNumber(this.stage.vars.speedOverall);
      for (let i = 0; i < 360; i++) {
        this.direction -= 1;
        yield* this.wait(60 / (this.toNumber(this.stage.vars._18rpm) * 360));
        yield;
      }
      yield;
    }
  }
}
