let year = +prompt(`Введите год`);

if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
    alert(`Високосный год`)
}else {
    alert(`Невысокосный год`)
}
console.log;