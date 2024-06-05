const catalogo = {
    'abacaxi': 4.50,
    'banana': 1.20,
    'laranja': 3.00,
    'manga': 4.50
};


function buscarValorItem(item) {
    const itemNormalizado = item.toLowerCase();

    if (catalogo.hasOwnProperty(itemNormalizado)) {
        return `O valor do(a) ${item}: R$${catalogo[itemNormalizado]}`;
    } else {
        return 'Item nao encontrado no catalogo.';
    }
}

function executarBusca() {
    const itemUsuario = prompt('Por favor, insira o nome do item:');
    const resultado = buscarValorItem(itemUsuario);
    alert(resultado);
}

function carregarListaDeItens() {
    const listaDeItens = document.getElementById('item-list');
    for (const item in catalogo) {
        const listItem = document.createElement('li');
        listItem.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        listaDeItens.appendChild(listItem);
    }
}

window.onload = carregarListaDeItens;
