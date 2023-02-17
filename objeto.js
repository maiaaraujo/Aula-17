//let pessoa = {
//altura: 1.65,
 //   pele: {
 //       tom: "clara",
 //       tipo: "oleosa"
//
//
 //   },   
 //   olhos: "castanhos",
 //   cabelo: "preto",
 //   idade: 32

//}

//document.write(pessoa.pele.tipo);


let produto = {
    nome: "arroz",
    preco: "4.69",
    qtd: 3
}

let lista = [
    {
        nome: "arroz",
        preco: 4.69,
        qtd: 3
    },
    {
        nome: "cx. ovos",
        preco: 17.00,
        qtd: 1,
        desconto: 0
    }
];



for(let i = 0; i < lista.length; i++){
    document.write(lista[i].nome+"<br>")
}
     



//array - let lista = [item, item2]
//object - let pessoa = {pele:clarA, olhos: verdes}