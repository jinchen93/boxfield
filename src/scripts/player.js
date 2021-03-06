const Piece = require("./piece");
const Draw = require("./draw");
const Utils = require("./utils");

// Contains the properties of the player (position, direction, etc)
class Player extends Piece {
  constructor() {
    super();
    this.properties = this.setupPositions();
  }

  setupPositions() {
    const x = Utils.width / 2;
    const y = Utils.height * 0.85;
    const splitHeight = Utils.height / 15;
    const width = Utils.width / 50;
    const height = Utils.height / 12;

    return {
      points: {
        all: [
          [x, y],
          [x + width, y + height],
          [x, y + splitHeight],
          [x - width, y + height],
        ],
      },
    };
  }

  animate(ctx) {
    Draw.drawPlayer(ctx, this.properties);
  }
}

module.exports = Player;
