function proximo() {
    
    document.getElementById('titulo-grupo-a').innerText = "🅳 Grupo D";
    const listaA = document.getElementById('lista-selecoes-a');
    listaA.innerHTML = `
        <li>Estados Unidos</li>
        <li>Paraguai</li>
        <li>Austrália</li>
        <li>Turquia</li>
    `;
    document.querySelector('#fatos-grupo-a p').innerText = 
        "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";

    
    document.getElementById('titulo-grupo-b').innerText = "🅴 Grupo E";
    const listaB = document.getElementById('lista-selecoes-b');
    listaB.innerHTML = `
        <li>Alemanha</li>
        <li>Equador</li>
        <li>Costa do Marfim</li>
        <li>Curaçao</li>
    `;
    document.querySelector('#fatos-grupo-b p').innerText = 
        "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";

    
    document.getElementById('titulo-grupo-c').innerText = "🅵 Grupo F";
    const listaC = document.getElementById('lista-selecoes-c');
    listaC.innerHTML = `
        <li>Holanda</li>
        <li>Japão</li>
        <li>Tunísia</li>
        <li>Suécia</li>
    `;
    
    document.querySelector('#fatos-grupo-c p').innerText = 
        "Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.";

    
    const btn = document.getElementById('btn-proximo');
    btn.innerText = "Conteúdo Atualizado";
    btn.disabled = true;
    btn.style.backgroundColor = "#6c757d";
}


function add(event) {
    
    const containerCards = document.getElementById('Cards');

    const cardVazio = document.getElementById('card-vazio');

    
    if (cardVazio) {
        cardVazio.remove();
    }
   

    const novoCard = `
        <div class="card ms-3" style="width: 22rem;" aria-hidden="true">
            <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">

            <div class="card-body">
                <h5 class="card-title">
                    <span class="card-title">Lucas Tolentino Coelho de Lima</span>
                    <span class="badge text-bg-secondary">8,8</span>
                </h5>
                <p class="card-text">
                    <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                    <span><strong>Altura:</strong> 1,80 m</span><br>
                    <span><strong>Posição:</strong> Meio-campista</span><br>
                </p>
            </div>
        </div>
    `;

    containerCards.insertAdjacentHTML('beforeend', novoCard);
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('disabled');
    }
}