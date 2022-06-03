// 1-задание
let a = 5;
if (a == 10) {
  console.log("верно");
} else {
  console.log("Неверно");
}

// 2-задание
if (a >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a = 1;
if (a >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a = 0;
if (a >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
a = -3;
if (a >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 3-задание
let test = true;
if (test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
test = false;
console.log(test == false ? "Верно" : "Неверно");

// 4-задание
let p = 5;
if ((p > 2 && p < 11) || (p == 6 && p < 14)) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 5-задание
let num = 4;
let result = "";
switch (num) {
  case 1:
    result = "Зима";
    break;
  case 2:
    result = "Весна";
    break;
  case 3:
    result = "Лето";
    break;
  case 4:
    result = "Осень";
    break;
}
console.log(result);

//Доп задание 1
let x = 10,
  y = 7;
x > y ? console.log("x больше чем y") : console.log("x не больше, чем y");

//Доп задание 2
let month = 6;
switch (month) {
  case 1:
    console.log("Зима");
    break;
  case 2:
    console.log("Зима");
    break;
  case 3:
    console.log("Весна");
    break;
  case 4:
    console.log("Весна");
    break;
  case 5:
    console.log("Весна");
    break;
  case 6:
    console.log("Лето");
    break;
  case 7:
    console.log("Лето");
    break;
  case 8:
    console.log("Лето");
    break;
  case 9:
    console.log("Осень");
    break;
  case 10:
    console.log("Осень");
    break;
  case 11:
    console.log("Осень");
    break;
  case 12:
    console.log("Зима");
    break;
}

//Доп задание 3
let red = "Нет",
  yellow = "Нет";
green = "Нет";
if ((red, yellow == "Нет")) {
  green = "Да";
  console.log("Разрешается переходить дорогу");
} else {
  console.log("Дорогу переходить нельзя");
}
