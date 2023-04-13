import MissionResult from "MissionResult";
export default class Timer {
  canvas;
  ctx;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.id = "timer";
    document.body.append(this.canvas);
    this.canvas.width = 90;
    this.canvas.height = 90;

    this.canvas.style.left = "867px";
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = 40;
    this.time = 120; // 2 minutes in seconds

    this.intervalId = null;
    this.startTimer();
    this.false = null;
  }

  drawTimer(minutes, seconds) {
    // Draw background

    this.ctx.beginPath();
    this.ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fill();

    // Draw minutes arc
    // this.ctx.beginPath();
    // this.ctx.arc(
    //   this.centerX,
    //   this.centerY,
    //   this.radius,
    //   -Math.PI / 2,
    //   (2 * Math.PI * minutes) / 60 - Math.PI / 2,
    //   false
    // );
    // this.ctx.lineWidth = 15;
    // this.ctx.strokeStyle = "#4d4d4d";
    // this.ctx.stroke();

    // Draw seconds arc
    this.ctx.beginPath();
    this.ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      -Math.PI / 2,
      (2 * Math.PI * seconds) / 60 - Math.PI / 2,
      false
    );
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "#323232";
    this.ctx.stroke();

    // Draw text
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
      this.centerX,
      this.centerY + 10
    );
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.decrementTime();
    }, 1000);
  }

  decrementTime() {
    this.time--;
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    this.drawTimer(minutes, seconds);

    if (this.time === 0) {
      this.false = new MissionResult(false);
      clearInterval(this.intervalId);
    }
  }
}

// const canvas = document.getElementById("canvas");
// const timer = new Timer(canvas);
// timer.drawTimer(2, 0); // Initialize timer to 2 minutes
// timer.startTimer();
