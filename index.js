
function writeCards(names,eventname){
    let arr = [];
    for (let i=0;i<names.length; i++){
        let str = `Thank you, ${names[i]}, for the wonderful ${eventname} gift!`;
        arr.push(str);

    }
  return arr;
}
function countDown(num){
    while (num >= 0){
        console.log(num--);
    }
}


