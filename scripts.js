let produtos = [];

function adicionarItem(){
    let produto = {
        nome: nome.value,
        preco: preco.value,
        qtd: qtd.value
    };
    produtos.push(produto);
    lista.innerHTML = "";
    localStorage.setItem("produtos", JSON.stringify(produtos))
    listarItens();     
}

function listarItens(){
    let itens = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if (itens && itens.length > 0)
        produtos = items;
        for (let i = 0; i < itens.length; i++){
            lista.innerHTML += `<li class="list-group-item">${itens[i]}</li>`;
     }

listarItens();     
    
}




//int: inteiro
//float: decimal
//array: agrupamento de valores
