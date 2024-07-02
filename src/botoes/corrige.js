import { zeraVotos } from '../funcoes/votos';
import { urna } from '../main';
const votoNulo = document.querySelector('.voto-nulo');
const digitos = document.querySelectorAll('.digitos-tela');
const candidatoInfo = document.querySelector('.candidato-info');
const branco_btn = document.getElementById('branco');
const primeiroDigito = document.querySelector('.primeiro-digito');
const corrige = document.querySelector('.corrige');
const fim = document.querySelector('.fim');

const cliqueCorrige = (event) => {
  const el = event.target;
  if (el.classList.contains('corrige')) {
    const somNumeros = new Audio();
    somNumeros.src = '../public/audios/corrige.mp3';
    somNumeros.play();
    corrigeVoto();
  }
};

export const capturaCorrige = () => {
  cliqueCorrige;
  corrige.addEventListener('click', cliqueCorrige);
};

export const bloqueiaCorrige = () => {
  cliqueCorrige;
  corrige.removeEventListener('click', cliqueCorrige);
};

export const corrigeVoto = () => {
  urna.run = true;
  urna.branco = false;
  urna.confirma = false;

  if (!urna.run) {
    return;
  }

  // biome-ignore lint/complexity/noForEach: <explanation>
  digitos.forEach((di) => {
    di.innerHTML = '';
    di.classList.remove('esconde-pisca');
    di.classList.remove('pisca');
    if (!urna.branco) {
      primeiroDigito.classList.toggle('pisca');
    }
  });

  candidatoInfo.classList.add('candidato-info');
  candidatoInfo.classList.remove('aparece-candidato-info');
  votoNulo.classList.add('voto-nulo');
  votoNulo.classList.remove('aparece-nulo');

  branco_btn.classList.add('hidden');
  fim.classList.add('hidden');

  zeraVotos();
  urna.reset();
};
