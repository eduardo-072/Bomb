document.addEventListener('DOMContentLoaded', () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.querySelector('.compra-container');

    if (carrinho.length > 0) {
        carrinho.forEach(produto => {
            container.innerHTML += `
                <div class="produto-selecionado" style="border:1px solid #ccc; padding:15px; margin-top:10px;">
                    <h3>${produto.nome}</h3>
                    <p><strong>Código do Produto:</strong> ${produto.id}</p>
                    <p><strong>Descrição:</strong> ${produto.ds}</p>
                    <p><strong>Preço:</strong> R$ ${produto.preco}</p>
                </div>
            `;
        });

        container.innerHTML += `
    <button id="limpar-carrinho" class="btn-limpar">Limpar Carrinho</button>
    <button id="botao-pagamento" class="btn-pagamento">Ir para Pagamento</button>
    <div id="result"></div>
`;
document.getElementById('botao-pagamento').addEventListener('click', () => {
    window.location.href = 'pagamento.html';
});


        document.getElementById('limpar-carrinho').addEventListener('click', () => {
            localStorage.removeItem('carrinho');
            carrinhoMap = {};
            total = 0;
            container.innerHTML = '<p>Carrinho limpo!</p>';
        });

        atualizarResultado(carrinho);
    } else {
        container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }
});



