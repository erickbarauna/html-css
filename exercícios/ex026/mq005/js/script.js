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

function mudouTamanho() { // Impede que os itens do menu desapareçam quando vc fechar o menu e aumentar a tela
    if (window.innerWidth >= 768) {
        itens.style.display = "block"
    }
    else {
        itens.style.display = "none"
    }
}