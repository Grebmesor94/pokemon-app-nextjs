import confetti from "canvas-confetti";

var count = 400;
var defaults = {
  origin: { y: 0.7 }
};

export function fire( particleRatio: any, opts: any ) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}
