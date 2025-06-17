function verificarPagamento() {
  const forma = document.getElementById("pagamento").value;
  const campoCartao = document.getElementById("campo-cartao");
  const campoPix = document.getElementById("campo-pix");

  campoCartao.style.display = "none";
  campoPix.style.display = "none";

  if (forma === "cartao") {
    campoCartao.style.display = "block";
  } else if (forma === "pix") {
    campoPix.style.display = "block";
  }
}

function compraPaga() {
  const forma = document.getElementById("pagamento").value;

  if (forma === "") {
    mostrarAlerta("Por favor, selecione uma forma de pagamento.");
    return;
  }

  if (forma === "cartao") {
    const numero = document.getElementById("numero-cartao").value.trim();
    const validade = document.getElementById("validade-cartao").value.trim();
    const cvv = document.getElementById("cvv-cartao").value.trim();

    if (!numero || !validade || !cvv) {
      mostrarAlerta("Por favor, preencha todos os campos do cartão.");
      return;
    }
  }

  const alerta = document.getElementById("adicionado");
  const texto = document.getElementById("alert-text");

  texto.textContent = "Compra realizada com sucesso!";
  alerta.style.display = "block";

  setTimeout(() => {
    alerta.style.display = "none";
  }, 3000);
}

function mostrarAlerta(msg) {
  const alert = document.getElementById('Erro');
  alert.textContent = msg;
  alert.classList.add('erro');

  setTimeout(() => {
    alert.classList.remove('erro');
  }, 4000);
}

