/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gear16Teeth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gear 16 teeth", "./Gear16Teeth/costumes/gear 16 teeth.png", {
        x: 181,
        y: 181,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 85;
    this.x = this.toNumber(this.stage.vars._16x);
    this.stage.vars._16rpm = 6;
    while (true) {
      this.stage.vars._16x = -142;
      this.stage.vars._16rpm =
        this.toNumber(this.stage.vars._16rpm) *
        this.toNumber(this.stage.vars.speedOverall);
      for (let i = 0; i < 360; i++) {
        this.direction -= 1;
        yield* this.wait(60 / (this.toNumber(this.stage.vars._16rpm) * 360));
        yield;
      }
      yield;
    }
  }
}
