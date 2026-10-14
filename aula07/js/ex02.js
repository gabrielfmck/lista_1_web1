// Mantém a numeração entre os cliques; o valor inicial corresponde ao item presente no HTML.
let contador = 1; // a lista já começa com o Item 1

// Esta função é chamada pelo atributo onclick do botão na página ex02.html.
function adicionarItem() {
    // Incrementa o contador para que o próximo item receba o número seguinte.
    contador = contador + 1;

    // Cria um elemento de lista e define seu texto antes de inseri-lo na página.
    const li = document.createElement("li");
    li.textContent = "Item " + contador;

    // Localiza a lista pelo id e adiciona o novo elemento ao final dos itens existentes.
    document.getElementById("lista").appendChild(li);
}
