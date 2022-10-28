function clickMenu() {
    if (itens.style.display == "block") {
        burguer.innerHTML = "menu"
        itens.style.display = "none"
    }
    else {
        burguer.innerHTML = "close"
        itens.style.display = "block"
    }
}