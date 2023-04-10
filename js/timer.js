export default class Timer {
  canvas;
  ctx;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.id = "timer";
    document.body.append(this.canvas);
    // this.canvas = canvas;
    // this.ctx = canvas.getContext("2d");
    this.canvas.width = 90;
    this.canvas.height = 90;

    this.canvas.style.left = "800px";
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = 40;
    this.time = 120; // 2 minutes in seconds
    this.intervalId = null;
    this.startTimer();
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
    this.ctx.fillStyle = "#eee";
    this.ctx.fill();

    // Draw minutes arc
    this.ctx.beginPath();
    this.ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      -Math.PI / 2,
      (2 * Math.PI * minutes) / 60 - Math.PI / 2,
      false
    );
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "#ff9f1c";
    this.ctx.stroke();

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
    this.ctx.strokeStyle = "#4d4d4d";
    this.ctx.stroke();

    // Draw text
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#4d4d4d";
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
      clearInterval(this.intervalId);
      swal(
        "미션 실패",
        "주어진 시간 내에 미션을 완수하지 못했습니다.",
        "error"
      );
      // Show the GIF
      //document.getElementById("gif").style.display = "block";
      // Redirect to mainPage.html after 5 seconds
      setTimeout(() => {
        window.location.href = "/main2.html";
      }, 5000);
    }
  }
}

// const canvas = document.getElementById("canvas");
// const timer = new Timer(canvas);
// timer.drawTimer(2, 0); // Initialize timer to 2 minutes
// timer.startTimer();
