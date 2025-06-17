const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => 
    botao.addEventListener('click', function(event){
        event.preventDefault();

        const card = this.closest('.card');
        const id = card.dataset.id;
        const nome = card.dataset.nome;
        const ds = card.dataset.descricao;
        const preco = card.dataset.preco;

        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push({id, nome, ds, preco});
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        mostrarAlert(`adicionado ao carrinho! - Preço: R$ ${preco}`);
    })
);

function mostrarAlert(mensagem) {
    const alert = document.getElementById("adicionado");
    const text = document.getElementById("alert-text");

    text.textContent = mensagem;
    alert.classList.add("mostrar");

    setTimeout(() => {
        alert.classList.remove("mostrar");
    }, 3000); 
}
