var fruit = ['apple', 'star fruit', 'peach'];

console.time("Time to eat "+fruit.length + "LOL");

var rightNow = new Date();
console.log(+rightNow);    //console.log(new Number(rightNow));

var firstDate = +new Date(),
    endDate = +new Date(),
    elapsedTime = endDate - firstDate;
console.log(elapsedTime);  //The amount of time that passed between the creation of both variables 
