function placa() {
    const final = parseInt(document.querySelector("#final").value);
    const dia = document.querySelector('#dia').value;
    const texto = document.querySelector("h3");



    if ((final === 1 || final === 2) && (dia == "Segunda" || dia == "segunda" || dia == "segunda-feira" || dia == "Segunda-feira")) {
        texto.innerHTML = "Não permitido 🚫";
        imagem.setAttribute("src", "./img/naopermitido.jpg.png");
    }

    else if ((final === 3 || final === 4) && (dia == "Terça" || dia == "Terca" || dia == "terça" || dia == "terca")) {
        texto.innerHTML = "Não permitido 🚫";
        imagem.setAttribute("src", "./img/naopermitido.jpg.png");
    }
  
    else if ((final === 5 || final === 6) && (dia == "Quarta" || dia == "quarta" || dia == "quarta-feira" || dia == "Quarta-feira")) {
        texto.innerHTML = "Não permitido 🚫";
        imagem.setAttribute("src", "./img/naopermitido.jpg.png");

    } else if ((final === 7 || final === 8) && (dia == "Quinta" || dia == "quinta" || dia == "quinta-feira" || dia == "Quinta-feira")) {
        texto.innerHTML = "Não permitido 🚫";
        imagem.setAttribute("src", "./img/naopermitido.jpg.png");

    } else if ((final === 9 || final === 10) && (dia == "Sexta" || dia == "sexta" || dia == "sexta-feira" || dia == "Sexta-feira")) {
        texto.innerHTML = "Não permitido 🚫";
        imagem.setAttribute("src", "./img/naopermitido.jpg.png");

    }
    else {
        ("Permitido")
        texto.innerHTML = "Permitido! ✅";
        imagem.setAttribute("src", "./img/permitido.png");
    }
}
