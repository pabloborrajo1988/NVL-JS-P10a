var lista=[1,2,-1,3,4,5];
console.log("entrando en el for(solo muestra valores +)");
for(var i=0;i<lista.length;i++){
  if(lista[i]>0)
  console.log(lista[i]);
  else {
    console.log("saliendo del bucle porque encontramos negativos:"+lista[i]);
    break;
  }

}
console.log("entrando en while(cuando encuentre un valor>4 que salga)");
var i=0;
while(lista[i]<=4){
  console.log(lista[i]);
  i++;
}
console.log("el valor es >4,estoy fuera:"+lista[i]);

console.log("entrando en do-while cuando sea >3)");
i=0;
do{
  if (lista[i]<=3)
    console.log(lista[i]);
  else {
    break;
  }
  i++;
}while(lista[i]<=3);
console.log("el valor >3,estoy fuera"+lista[i]);
