let contador = 1; // a lista já começa com o Item 1

function adicionarItem() {
    contador = contador + 1;

    const li = document.createElement("li");
    li.textContent = "Item " + contador;

    document.getElementById("lista").appendChild(li);
}
