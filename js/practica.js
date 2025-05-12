/*let pais = prompt("Ingrese su país");
const paises = []//[bolivia, peru, argentina, chile, paraguay, uruguay, brasil, colombia, ecuador, venezuela]
if (pais == "Bolivia") {
    console.log("El país es Bolivia");
}
else if (pais == "Peru") {
    console.log("El país es Peru");
}
else if (pais == "Argentina") {
    console.log("El país es Argentina");
}
else if (pais == "Chile") {
    console.log("El país es Chile");
}
else if (pais == "Paraguay") {
    console.log("El país es Paraguay");
}
else if (pais == "Uruguay") {
    console.log("El país es Uruguay");
}
else if (pais == "Brasil") {
    console.log("El país es Brasil");
}
else if (pais == "Colombia") {
    console.log("El país es Colombia");
}
else if (pais == "Ecuador") {
    console.log("El país es Ecuador");
}
else if (pais == "Venezuela") {
    console.log("El país es Venezuela");
}
else {
    console.log("El país no es válido");}

*/


const ciudades= ["POPAYAN", "LA PAZ", "COCHABAMBA", "ORURO", "TARIJA", "POTOSI", "BENI", "PANDO", "CHUQUISACA", "SANTA CRUZ"];
let ciudad= prompt("Ingrese su ciudad");


let existe = false;
//console.log(ciudad);
for (let i = 0; i < ciudad.length; i++) {
    if (ciudad.toUpperCase() === ciudad[i]) {
      existe = true;
      break;
    }
}
    if (existe){
        console.log("la ciudad " + ciudad + " existe");
    }else {
        console.log("La ciudad " + ciudad + " no existe");
 
    //agregamos al arreglo
    }
    ciudad.push(ciudades.toUpperCase());
    
    console.log(ciudad);
