
function mostrarTabela() {
    const container = document.getElementById('espaco-tabela');
    container.innerHTML = `
        <img src="img/Tabela_Jogos.png" 
             alt="Tabela de Jogos da Copa do Mundo" 
             style="max-width: 90%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    `;
}


function revelar() {
    
    const imagem = document.querySelector('.card-img-top');
    if(imagem) {
        imagem.src = 'img/_vinicius_junior.png';
    }

    
    const spanNome = document.querySelector('#Nome .placeholder');
    const spanRank = document.getElementById('Rank');
    const spanDataNas = document.getElementById('Data_Nas');
    const spanAltura = document.getElementById('Alutra'); 
    const spanPosicao = document.getElementById('Posição '); 

    if(spanNome) spanNome.textContent = '⚽ Nome Completo: Vinícius José Paixão de Oliveira Júnior';
    if(spanRank) spanRank.textContent = '🏃 Rank: 9,5';
    if(spanDataNas) spanDataNas.textContent = '📅 Data de Nascimento: 12/07/2000 (25 anos)';
    if(spanAltura) spanAltura.textContent = '📏 Altura: 1,76 m';
    if(spanPosicao) spanPosicao.textContent = '🏃 Posição: Ponta-esquerda / Atacante';

    const spansParaAtualizar = [spanNome, spanDataNas, spanAltura, spanPosicao];
    
    spansParaAtualizar.forEach(span => {
        if (span) {
            span.classList.remove('placeholder', 'col-4', 'col-6');
            span.classList.add('card-text');
        }
    });

    const titulo = document.getElementById('Nome');
    if (titulo) titulo.classList.remove('placeholder-glow');
    
    const paragrafos = document.querySelectorAll('.placeholder-glow');
    paragrafos.forEach(p => p.classList.remove('placeholder-glow'));
}