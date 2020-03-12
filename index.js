//ejercicio 1

const limit = 20;
var inicio = 0;

while(inicio < 20){
    inicio++;
    if(inicio%2 === 0){
        console.log("Par",inicio);
    } else{
        console.log("Impar",inicio);
    }
}

//ejercicio 2

let multiplicador = 9;
for(var i=0; i<=10; i++){
    var result = multiplicador * i;
    console.log( multiplicador,"*", i ,`= ${result}`);
}