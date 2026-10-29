
var precoMaca = 2.5;
var precoBanana = 1.5;
var precoLaranja = 2.0;
var precoMelancia = 15.0;


function formatar(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}


function perguntarQuantidade(nome, preco) {
  var resposta = prompt(
    nome + " — " + formatar(preco) + "\nQuantas unidades? Digite de 0 a 99.",
    "0"
  );

  // clicou em Cancelar
  if (resposta === null) {
    return -1;
  }

  var quantidade = Number(resposta);

  
  if (resposta.trim() === "" || isNaN(quantidade) || quantidade < 0 || quantidade > 99 || quantidade % 1 !== 0) {
    alert("Quantidade inválida! Use números inteiros de 0 a 99.");
    return -1;
  }

  return quantidade;
}

function simularCompra() {
  var qtdMaca = perguntarQuantidade("MAÇÃ", precoMaca);
  if (qtdMaca === -1) {
    return;
  }

  var qtdBanana = perguntarQuantidade("BANANA", precoBanana);
  if (qtdBanana === -1) {
    return;
  }

  var qtdLaranja = perguntarQuantidade("LARANJA", precoLaranja);
  if (qtdLaranja === -1) {
    return;
  }

  var qtdMelancia = perguntarQuantidade("MELANCIA", precoMelancia);
  if (qtdMelancia === -1) {
    return;
  }

  
  if (qtdMaca === 0 && qtdBanana === 0 && qtdLaranja === 0 && qtdMelancia === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  
  var subMaca = precoMaca * qtdMaca;
  var subBanana = precoBanana * qtdBanana;
  var subLaranja = precoLaranja * qtdLaranja;
  var subMelancia = precoMelancia * qtdMelancia;

  var total = subMaca + subBanana + subLaranja + subMelancia;

  
  var mensagem = "RESUMO DA COMPRA\n\n";

  if (qtdMaca > 0) {
    mensagem += "Maçã: " + qtdMaca + " un. = " + formatar(subMaca) + "\n";
  }
  if (qtdBanana > 0) {
    mensagem += "Banana: " + qtdBanana + " un. = " + formatar(subBanana) + "\n";
  }
  if (qtdLaranja > 0) {
    mensagem += "Laranja: " + qtdLaranja + " un. = " + formatar(subLaranja) + "\n";
  }
  if (qtdMelancia > 0) {
    mensagem += "Melancia: " + qtdMelancia + " un. = " + formatar(subMelancia) + "\n";
  }

  mensagem += "\nSubtotal: " + formatar(total) + "\n";


  if (total >= 50) {
    var desconto = total * 0.1;
    total = total - desconto;
    mensagem += "Desconto de 10%: -" + formatar(desconto) + "\n";
  } else {
    mensagem += "Sem desconto (a partir de R$ 50,00 ganha 10%)\n";
  }

  mensagem += "TOTAL: " + formatar(total);

  alert(mensagem);
}
