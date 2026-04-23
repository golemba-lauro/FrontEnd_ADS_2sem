function mostrarTabela() {
    if (document.getElementById("tabelaJogos")) {
        return;
    }
    const imagem = document.createElement('img');
    
    imagem.src = 'img/Tabela_Jogos.png';
    imagem.alt = 'Tabela de Jogos da Copa do Mundo 2026'; 
    imagem.style.display = 'block';
    imagem.style.margin = '30px auto';
    imagem.style.maxWidth = '90%';
    imagem.style.borderRadius = '8px';

    document.getElementById("img").innerHTML = imagem.outerHTML;
}

function revelar() {
    
     let img = document.querySelector(".card img");
    img.src = "img/_vinicius_junior.png";

    let nome = document.getElementById("Nome");
    let rank = document.getElementById("Rank");
    let data = document.getElementById("Data_Nas");
    let altura = document.getElementById("Alutra");
    let posicao = document.querySelector('[id="Posição "]');

    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior ";
    nome.appendChild(rank); 

    rank.innerText = "9,5";

    data.innerText = "📅 12/07/2000 (25 anos)";
    altura.innerText = "📏 1,76 m";
    posicao.innerText = "🏃 Ponta-esquerda / Atacante";

    let elementos = [nome, data, altura, posicao];

    elementos.forEach(el => {
        el.classList.remove("placeholder", "placeholder-glow");
        el.classList.add("card-text");
    });
}