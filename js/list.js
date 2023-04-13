import Item from "Item";
var menuList = [
  new Item("치즈버거", 4200, 0),
  new Item("불고기버거", 4700, 1),
  new Item("뉴치즈버거", 4700, 2),
  new Item("빅맥버거", 6500, 3),
  new Item("베이컨치즈버거", 8100, 4),
  new Item("더블치즈버거", 5700, 5),
  new Item("새우버거", 4700, 6),
  new Item("불고기칠리버거", 7100, 7),
  new Item("핫크리스피버거", 5900, 8),
  new Item("감자튀김(중)", 1800, 9),
  new Item("감자튀김(대)", 2200, 10),
  new Item("치즈스틱(2개)", 2400, 11),
  new Item("치즈스틱(4개)", 4500, 12),
  new Item("스낵랩", 2900, 13),
  new Item("오징어링", 2600, 14),
  new Item("해쉬브라운", 1000, 15),
  new Item("치킨너겟", 2700, 16),
  new Item("치킨텐더", 4900, 17),
  new Item("콜라", 2000, 18),
  new Item("사이다", 2000, 19),
  new Item("환타", 2000, 20),
  new Item("자몽에이드", 2700, 21),
  new Item("아이스티", 2300, 22),
  new Item("오렌지주스", 2500, 23),
  new Item("핫아메리카노", 2500, 24),
  new Item("아이스아메리카노", 2500, 25),
  new Item("물", 1500, 26),
  new Item("소프트콘", 1000, 27),
  new Item("초코아이스크림", 1900, 28),
  new Item("딸기아이스크림", 1900, 29),
  new Item("오레오쉐이크", 2800, 30),
  new Item("팥빙수", 4000, 31),
  new Item("츄러스", 2000, 32),
  new Item("애플파이", 1700, 33),
  new Item("치즈볼", 2300, 34),
  new Item("콘샐러드", 1900, 35),
  new Item("치즈세트", 6200, 36),
  new Item("불고기세트", 6700, 37),
  new Item("뉴치즈세트", 6700, 38),
  new Item("빅맥세트", 8500, 39),
  new Item("베이컨치즈세트", 10100, 40),
  new Item("더블치즈세트", 7700, 41),
  new Item("새우세트", 6700, 42),
  new Item("불고기칠리세트", 9100, 43),
  new Item("핫크리스피세트", 7900, 44),
];

let shoppingList = [];

let m = menuList.map((item) => new Item(item.name, item.price, item.id));
let missionList = [];
console.log(menuList);
console.log(m);

let sort = function (list) {
  list.sort((a, b) => a.id - b.id);
};

let compareMission = function () {
  sort(shoppingList);
  sort(missionList);
  let missionCount = 0;
  console.log(missionList);
  console.log("mission c출력");
  console.log(shoppingList);
  console.log("shoppingList 출력");

  if (shoppingList.length != missionList.length) return false;

  for (let idx in shoppingList) {
    if (shoppingList[idx].name == missionList[idx].name) {
      if (shoppingList[idx].index == missionList[idx].index) {
        missionCount++;
      }
    }
  }
  console.log(missionCount);
  return missionCount;
};
export { menuList, shoppingList, m, missionList, compareMission };
