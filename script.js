let total = 0;

function adicionarAoCarrinho(prato, preco) {
    const carrinho = document.getElementById('itens-carrinho');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${prato} - R$ ${preco.toFixed(2)}`;
    carrinho.appendChild(novoItem);
    
    total += preco;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
