function calcularMedia(notas) {
    let total = notas[0] + notas[1] + notas[2] + notas[3];

    let media = total/4;

    return media;
}

let mediaG = calcularMedia([10, 9.5, 9, 9.8]);
alert("Media do Gleidson" + mediaG);

let mediaA = calcularMedia([9, 7, 6.8, 9]);
alert("Media do Ale" + mediaA);

let mediaM = calcularMedia([6, 7, 6.8, 9]);
alert("Media da Maritana" + mediaM);




// let notas = [
//     10,
//     9,
//     8.5,
//     9.8,
// ];

// let total = notas[0] + notas[1] + notas[2] + notas[3];
//     alert(total/4);