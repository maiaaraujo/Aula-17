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

    if (itens && itens.length > 0){
        produtos = itens;
        for (let i = 0; i < itens.length; i++){
            lista.innerHTML += `<li class="list-group-item d-flex">
                <div class="w-50">${itens[i].nome}</div>
                <div class="w-25">${itens[i].qtd}</div>
                <div class="w-25">${itens[i].preco}</div>
            </li>`;
      }
    }  
  }  

listarItens();     
    





//int: inteiro
//float: decimal
//array: agrupamento de valores
