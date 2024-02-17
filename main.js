const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom(idAudio) {
    let audio = document.querySelector(idAudio)
    audio.play();
}

for (let contador = 0; contador <= listaDeTeclas.length; contador++ ) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const audioElemento = `#som_${instrumento}`

    tecla.onclick = function (){
        tocarSom(audioElemento);
    }
}