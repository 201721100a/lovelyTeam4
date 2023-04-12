import { menuList, shoppingList, missionList } from "List";
import Kiosk from "Kiosk";

export default class Mission {
  canvas;
  ctx;
  img;
  stage;
  randomMenuList;
  tmpList;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = document.getElementById("mission");

    document.body.append(this.canvas);
    this.canvas.id = "mission1";
    this.canvas.style.left = "200px";
    this.canvas.width = 600;
    this.canvas.height = 700;

    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);

    this.stage = 0;
    this.creatRandomMission();
    let missionImg = document.getElementById("imt");
    // console.log(missionList);
    this.please();

    this.ctx.drawImage(missionImg, 230, 470, 120, 120);

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

    this.ctx.clearRect(0, 0, 600, 700);
    console.log(x, y);
    console.log("random arr : " + missionList);
    document.body.removeChild(this.canvas);
    const kiosk = new Kiosk();
    this.canvas.style.left = "800px";
    this.canvas.style.top = "100px";
    document.body.append(this.canvas);

    this.printMission();

    this.draw();
  }
  printMission() {
    this.ctx.font = "15px GmarketSansMedium, serif";
    this.ctx.fillText("제한 시간  2분안에", 20, 50);
    for (let idx in missionList) {
      this.ctx.fillText(missionList[idx].name, 20, 70 + 20 * idx);
      this.ctx.fillText(missionList[idx].index + " 개,", 150, 70 + 20 * idx);
    }
  }
  please() {
    this.ctx.font = "18px GmarketSansMedium, serif";
    this.ctx.fillText("나 아직!! 배고파ㅠㅠ", 200, 270);
    this.ctx.fillText("뉴렉버거 먹고싶은데!", 200, 300);
    for (let idx in missionList) {
      this.ctx.fillText(missionList[idx].name, 200, 350 + 30 * idx);
      this.ctx.fillText(missionList[idx].index + " 개", 340, 350 + 30 * idx);
    }
    this.ctx.fillText("이렇게 사다줄 수 있엉?", 200, 450);
  }
  draw() {
    this.printMission();
    this.ctx.font = "15px GmarketSansMedium, serif";
    if (this.stage == 0) {
      console.log(missionList);
    } else if (this.stage == 1) {
      missionList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      console.log(missionList);
    } else if (this.stage == 2) {
      missionList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      missionList.push(menuList[Math.floor(Math.random() * 45)]);
      console.log(missionList);
    }
    this.ctx.fillText("를 모두 주문해주세요!", 20, 150);
  }

  selectStage() {
    if (this.stage == 0) {
      console.log(missionList);
    } else if (this.stage == 1) {
      missionList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      console.log(missionList);
    } else if (this.stage == 2) {
      missionList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      missionList.push(menuList[Math.floor(Math.random() * 45)]);
      console.log(missionList);
    }
  }

  creatRandomMission() {
    missionList.push(menuList[Math.floor(Math.random() * 9)]);
    missionList.push(menuList[Math.floor(Math.random() * 9 + 9)]);
    missionList.push(menuList[Math.floor(Math.random() * 18 + 18)]);
    for (let v of missionList) {
      v.index = Math.floor(Math.random() * 5 + 1);
      // console.log(v.index)
    }
  }
}
