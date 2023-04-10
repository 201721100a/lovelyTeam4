import { menuList, shoppingList } from "List";

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
    this.randomMenuList = [];
    this.creatRandomMission();
    let missionImg = document.getElementById("imt");
    this.please();

    this.ctx.drawImage(missionImg, 230, 470, 120, 120);

    this.burgerNum = Math.floor(Math.random() * 9);
    this.sideNum = Math.floor(Math.random() * 9 + 9);
    this.juiceNum = Math.floor(Math.random() * 18 + 18);
    this.missionNum = Math.floor(Math.random() * 4 + 1);
    this.tmpList = JSON.parse(JSON.stringify(shoppingList));
    this.creatRandomMission();
  }
  printMission() {
    this.ctx.font = "15px GmarketSansMedium, serif";
    this.ctx.fillText("제한 시간  2분안에", 20, 50);
    this.ctx.fillText(this.randomMenuList[0].name, 20, 70);
    this.ctx.fillText(this.randomMenuList[0].index + " 개,", 150, 70);
    this.ctx.fillText(this.randomMenuList[1].name, 20, 90);
    this.ctx.fillText(this.randomMenuList[1].index + " 개,", 150, 90);
    this.ctx.fillText(this.randomMenuList[2].name, 20, 110);
    this.ctx.fillText(this.randomMenuList[2].index + " 개", 150, 110);
  }
  please() {
    this.ctx.font = "18px GmarketSansMedium, serif";
    this.ctx.fillText("나 아직!! 배고파ㅠㅠ", 200, 270);
    this.ctx.fillText("뉴렉버거 먹고싶은데!", 200, 300);
    this.ctx.fillText(this.randomMenuList[0].name, 200, 350);
    this.ctx.fillText(this.randomMenuList[0].index + " 개,", 340, 350);
    this.ctx.fillText(this.randomMenuList[1].name, 200, 380);
    this.ctx.fillText(this.randomMenuList[1].index + " 개,", 340, 380);
    this.ctx.fillText(this.randomMenuList[2].name, 200, 410);
    this.ctx.fillText(this.randomMenuList[2].index + " 개", 340, 410);
    this.ctx.fillText("이렇게 사다줄 수 있엉?", 200, 450);
  }
  draw() {
    this.printMission();
    this.ctx.font = "15px GmarketSansMedium, serif";
    if (this.stage == 0) {
      console.log(this.randomMenuList);
    } else if (this.stage == 1) {
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      console.log(this.randomMenuList);
    } else if (this.stage == 2) {
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 45)]);
      console.log(this.randomMenuList);
    }
    this.ctx.fillText("를 모두 주문해주세요!", 20, 150);
  }

  selectStage() {
    if (this.stage == 0) {
      console.log(this.randomMenuList);
    } else if (this.stage == 1) {
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      console.log(this.randomMenuList);
    } else if (this.stage == 2) {
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 9 + 36)]);
      this.randomMenuList.push(menuList[Math.floor(Math.random() * 45)]);
      console.log(this.randomMenuList);
    }
  }

  creatRandomMission() {
    this.randomMenuList.push(menuList[Math.floor(Math.random() * 9)]);
    this.randomMenuList.push(menuList[Math.floor(Math.random() * 9 + 9)]);
    this.randomMenuList.push(menuList[Math.floor(Math.random() * 18 + 18)]);
    for (let v of this.randomMenuList) {
      v.index = Math.floor(Math.random() * 5 + 1);
      // console.log(v.index)
    }
  }

  compareMission() {
    console.log(this.randomMenuList);
    console.log("mission c출력");
    console.log(this.tmpList);
    console.log("list c출력");

    let clear = 0;
    for (let m of this.missionList) {
      console.log(m.name);
      for (let i in this.tmpList) {
        console.log(this.tmpList[i].name);
        if (m.name === this.tmpList[i].name) {
          console.log(`${this.tmpList[i].name} = ${m.name}`);
          if (m.index === this.tmpList[i].index) {
            console.log(`${this.tmpList[i].index} = ${m.index}`);
            this.tmpList.splice(i, 1);
            console.log("1개 일치");
            console.log(clear);
            clear++;
          }
        }
      }
    }
    if (clear === 4) {
      console.log("미션 성공");
    }
    alert("메인으로 이동");
    //window.location.href = "/main.html";
  }
}
