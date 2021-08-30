//オブジェクトや配列はconstで定義してもプロパティの変更、追加が可能
const obj = {
  name: "TAROU",
  age: 25
};
obj.name = "太郎";
console.log(obj); //{name: "太郎", age: 25}

const list = ["dog", "cat"];
list[0] = "bird";
list.push("monkey");
console.log(list); //["bird", "cat", "monkey"]

//テンプレート文字列
const name = "にゃんこうどん";
const age = 26;
console.log(`私の名前は${name}です。年齢は${age}です`); //私の名前はにゃんこうどんです。年齢は26です

//アロー関数  処理が一行の時は｛ return ｝を省略できる
const func1 = (num1, num2) => {
  return `足し算の結果は${num1 + num2}`;
};
console.log(func1(5, 10)); //足し算の結果は15

//分割代入 (オブジェクト)
const prof = {
  myname: "にゃんこうどん",
  myage: 26
};
const { myname, myage } = prof; //分割代入　プロパティを指定する
const message = `名前は${myname}です。年齢は${myage}です`;
console.log(message);
//分割代入 (配列)
const list2 = ["dog", "cat", "bird"];
const [inu, neko, tori] = list2; //配列はインデックス0から順に取り出し、変数名を定義
console.log(inu + neko + tori); //dogcatbird

//デフォルト値
const morning = (name = "名無し") =>
  console.log(`${name}さん、おはようございます`);
morning();

//スプレッド構文 配列の展開
const list3 = [1, 2, 3];
console.log(list3); //[1, 2, 3]
console.log(...list3); //1 2 3
const sum = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};
sum(...list3); //6

//スプレッド構文 配列をまとめて受けとる
const list4 = [1, 2, 3, 4, 5];
const [num1, ...numList] = list4;
console.log(num1); //1
console.log(numList); //[2, 3, 4, 5]

//スプレッド構文　配列のコピー、結合
const list5 = [1, 2];
const list6 = [3, 4];
const listJoin = [...list5, ...list6];
console.log(listJoin);

//配列の処理　map
//配列.map()
//配列.map( ここにアロー関数 )
//配列.map( (　)=>{　} )
//配列.map( (要素を引数に)=>{　処理　} )
const animalList = ["dog", "cat", "monkey"];
for (let i = 0; i < animalList.length; i++) {
  console.log(animalList[i]);
}
animalList.map((name) => {
  console.log(name);
});

//配列の処理　filter

//list4  = [1, 2, 3, 4, 5];
const newlist = list4.filter((num) => {
  return num % 2 === 1; //2で割った余りが1の要素をreturn
});
console.log(newlist); //[1, 3, 5]

const newlist2 = list4.map((num) => {
  if (num % 2 === 1) {
    return num + ":奇数";
  } else {
    return num + ":偶数";
  }
});
console.log(newlist2); //["1:奇数", "2:偶数", "3:奇数", "4:偶数", "5:奇数"]

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額が未設定です";
console.log(fee);//金額が未設定です

// &&は左側がtrueなら右側を返す