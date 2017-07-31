// filter function

var someArray = [1,2,3,4,5,6,7,8,9,10];


var result = someArray.filter(returnEven);

function returnEven(val){
  return val % 2 === 0;
}

document.getElementById("result").textContent = result;