import { m, shoppingList, missionList } from "List";
import Kiosk from "Kiosk";

export default class Mission {
  canvas;
  ctx;
  img;
  stage;
  randommission;
  tmpList;
  constructor(stage) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = document.getElementById("mission");

    this.canvas.id = "mission1";
    this.canvas.style.left = "200px";
    this.canvas.width = 1000;
    this.canvas.height = 700;
    this.isOrder = true;
    this.ctx.drawImage(
      this.img,
      -100,
      0,
      this.canvas.width,
      this.canvas.height
    );
    // this.ctx.font = "18px GmarketSansMedium, serif";
    this.stage = stage;
    this.creatRandomMission();
    let missionImg = document.getElementById("imt");
    this.selectStage();
    this.please();

    this.ctx.drawImage(missionImg, 270, 470, 120, 120);

    this.burgerNum = Math.floor(Math.random() * 9);
    this.sideNum = Math.floor(Math.random() * 9 + 9);
    this.juiceNum = Math.floor(Math.random() * 18 + 18);
    this.missionNum = Math.floor(Math.random() * 4 + 1);

    // this.creatRandomMission();
    this.canvas.onclick = this.missionClickHandler.bind(this);
  }

  missionClickHandler(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (!this.isOrder) return;
    if (this.isOrder) {
      this.ctx.clearRect(0, 0, 1000, 700);
      document.body.removeChild(this.canvas);
      const kiosk = new Kiosk();
      this.canvas.style.left = "800px";
      this.canvas.style.top = "100px";
      document.body.append(this.canvas);
      let missionBoard = document.getElementById("missionBoard");
      this.ctx.drawImage(missionBoard, -35, -80, 300, 400);
      this.ctx.fillStyle = "black";
      // this.ctx.fillText("MISSION", 50, 20);
      this.printMission();

      this.draw();
      this.isOrder = false;
    }
  }
  printMission() {
    this.ctx.font = "15px GmarketSansMedium, serif";
    this.ctx.fillText("제한 시간  2분안에", 28, 63);
    for (let idx in missionList) {
      this.ctx.fillText(missionList[idx].name, 28, 83 + 20 * idx);
      this.ctx.fillText(missionList[idx].index + " 개,", 158, 83 + 20 * idx);
    }
  }
  please() {
    this.ctx.font = "18px GmarketSansMedium, serif";
    this.ctx.fillText("나 아직!! 배고파ㅠㅠ", 250, 270);
    this.ctx.fillText("뉴렉버거 먹고싶은데!", 250, 300);
    for (let idx in missionList) {
      this.ctx.fillText(missionList[idx].name, 250, 330 + 20 * idx);
      this.ctx.fillText(missionList[idx].index + " 개", 390, 330 + 20 * idx);
    }
    this.ctx.fillText("이렇게 사다줄 수 있엉?", 250, 450);
  }
  draw() {
    this.ctx.font = "15px GmarketSansMedium, serif";
    this.ctx.fillText("를 모두 주문해주세요!", 28, 183);
  }

  selectStage() {
    if (this.stage == 0) {
      // console.log("s = 0" + missionList);
    } else if (this.stage == 1) {
      missionList.push(m[Math.floor(Math.random() * 9 + 36)]);
      // console.log("s = 1" + missionList);
    } else if (this.stage == 2) {
      missionList.push(m[Math.floor(Math.random() * 9 + 36)]);
      missionList.push(m[Math.floor(Math.random() * 45)]);
      // console.log("s = 2" + missionList);
    }
  }

  creatRandomMission() {
    missionList.push(m[Math.floor(Math.random() * 9)]);
    missionList.push(m[Math.floor(Math.random() * 9 + 9)]);
    missionList.push(m[Math.floor(Math.random() * 18 + 18)]);

    for (let v of missionList) {
      v.index = Math.floor(Math.random() * 5 + 1);
      // console.log(v.index)
    }
  }
}
