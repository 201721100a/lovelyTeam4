export default class MissionResult {
  #canvas;
  #ctx;
  #isClear;
  #clearImg;
  #failImg;
  #gameClearImg;
  #queryString;
  #params;
  #stage;
  #missionClearSound;
  #missionFailSound;
  constructor(isClear) {
    this.#canvas = document.createElement("canvas");
    this.#ctx = this.#canvas.getContext("2d");
    document.body.append(this.#canvas);
    this.#canvas.width = 600;
    this.#canvas.height = 700;
    this.#canvas.style.left = "200px";
    this.#canvas.style.top = "0";
    this.#canvas.style.position = "absolute";
    this.#queryString = window.location.search;
    this.#params = new URLSearchParams(this.#queryString);
    this.#stage = this.#params.get("stage");
    this.#clearImg = document.getElementById("clear");
    this.#failImg = document.getElementById("fail");
    this.#gameClearImg = document.getElementById("gameClear");

    this.#isClear = isClear;
    this.goNextFromMission();
    this.#canvas.onclick = this.clickHandler.bind(this);
    this.#missionClearSound = new Audio("../sound/missionClear.mp3");
    this.#missionFailSound = new Audio("../sound/missionFail.mp3");

    if (this.#isClear == true) {
      this.#missionClearSound.play();
    } else {
      this.#missionFailSound.play();
    }
    // const params = new URLSearchParams({
    //   stage: this.#stage,
    // });
  }
  clickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x, y);
    if (this.#isClear == true) {
      if (this.#stage == 2) {
        if (170 <= x && x <= 420 && 530 <= y && y <= 600) {
          window.location.href = `mainPage.html`;
        }
      } else {
        if (170 <= x && x <= 420 && 410 <= y && y <= 480) {
          // this.#ctx.drawImage(this.#gameClearImg, 0, 0, 600, 700);
          console.log("다음 레벨");

          window.location.href = `main.html?stage=${++this.#stage}`;
        }
      }
      if (170 <= x && x <= 420 && 530 <= y && y <= 600) {
        console.log("스테이지 1 메인으로 이동");
        window.location.href = `mainPage.html`;
      }
    }
    if (this.#isClear == false) {
      if (170 <= x && x <= 430 && 440 <= y && y <= 520) {
        console.log("실패 링크");
        window.location.href = `mainPage.html`;
      }
    }
  }

  goNextFromMission() {
    if (this.#isClear == true) {
      if (this.#stage == 2)
        this.#ctx.drawImage(this.#gameClearImg, 0, 0, 600, 700);
      else this.#ctx.drawImage(this.#clearImg, 0, 0, 600, 700);
    }
    if (this.#isClear == false) {
      this.#ctx.drawImage(this.#failImg, 0, 0, 600, 700);
    }
  }
}
