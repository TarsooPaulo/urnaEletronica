import { urna } from '..';
import { votoNulo } from '../funcoes/candidatos';
import { bloqueiaTodosBotoes } from './bloqueiaTodosBotoes';

const infosTelas = document.querySelector('.candidato-info');
const fim = document.querySelector('.fim');
const votoBranco = document.getElementById('branco');

const cliqueConfirma = (event) => {
  const el = event.target;
  if (el.classList.contains('confirma')) {
    const somNumeros = new Audio();
    somNumeros.src = '../public/audios/confirma.mp3';
    somNumeros.play();
    confirmaVoto();
  }
};

export const capturaConfirma = () => {
  cliqueConfirma;
  document.addEventListener('click', cliqueConfirma);
};

export const bloqueiaConfirma = () => {
  cliqueConfirma;
  document.removeEventListener('click', cliqueConfirma);
};

export const confirmaVoto = () => {
  urna.confirma = true;

  infosTelas.classList.add('hidden');
  votoNulo.classList.add('hidden');
  votoBranco.classList.add('hidden');
  fim.classList.remove('hidden');
  bloqueiaTodosBotoes();
};
