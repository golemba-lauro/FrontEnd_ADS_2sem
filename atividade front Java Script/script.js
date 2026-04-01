
const cria = document.getElementById("b");
const avatar = document.getElementById("avatar-img");
const btnAlimentar = document.getElementById("leitao");


const estados = {
    normal: "musketeer.png",
    puto: "mad.png",
    comendo: "musketeer_eat.png",
    morto: "dormindo.png",
};

let contador = 0;
let intervalo = null;
let timeoutClique = null;


function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo sem comer:", contador);

        if (contador === 5) {
            atualizarImagens(estados.puto);
        }
        
        if (contador >= 10) {
            atualizarImagens(estados.morto);
            console.log("A criatura morreu.");
            
            
            btnAlimentar.style.opacity = "0.3";
            btnAlimentar.style.cursor = "not-allowed";
        }
    }, 1000);
}


function alimentar() {
    
    if (contador >= 10) {
        console.log("Não é possível alimentar uma criatura morta.");
        return; 
    }

    console.log("Alimentando...");
    contador = 0;
    
    
    btnAlimentar.style.opacity = "1";
    btnAlimentar.style.cursor = "pointer";
    
    atualizarImagens(estados.comendo);

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        
        if (contador < 10) {
            atualizarImagens(estados.normal);
        }
    }, 1500);
}


function atualizarImagens(src) {
    cria.src = src;
    avatar.src = src;
}


function criarEstrelas() {
    const conteiner = document.getElementById('camada-estrelas');
    for (let i = 0; i < 100; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('absolute', 'bg-white', 'rounded-full', 'estrela');
        const tam = Math.random() * 3;
        estrela.style.width = tam + 'px';
        estrela.style.height = tam + 'px';
        estrela.style.top = Math.random() * 100 + '%';
        estrela.style.left = Math.random() * 100 + '%';
        estrela.style.animationDelay = Math.random() * 3 + 's';
        conteiner.appendChild(estrela);
    }
}


function alternarDiaNoite(toggle) {
    const noite = document.getElementById('camada-noite');
    const estrelas = document.getElementById('camada-estrelas');
    
    if (toggle.checked) {
        noite.style.opacity = "1";
        estrelas.style.opacity = "1";
    } else {
        noite.style.opacity = "0";
        estrelas.style.opacity = "0";
    }
}


criarEstrelas();
controlador();