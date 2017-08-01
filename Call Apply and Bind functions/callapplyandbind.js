// CALL APPLY AND BIND exemplos

var myCar = {
 name: "Lambo",
 colorChange: function(color){
    console.log("My " + this.name + " is " + color);
 }
}

var yourCar = {
  name: "Porsche"
}

myCar.colorChange.call(yourCar, "white") // passado por paramêtro o objeto "yourCar" e //a cor escolhida.
myCar.colorChange.apply(yourCar, ["red"]) // objeto "yourcar e a array com o parametro" //red"
var color = myCar.colorChange.bind(yourCar); // objeto "yourcar"
color("blue"); //parametro "blue"