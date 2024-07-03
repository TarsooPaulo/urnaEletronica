import { urna } from '..';
import { capturaConfirma } from './confirma';
import { cliqueDigito, tiraDigitosTela } from './digitos';

const branco_votoNulo = document.querySelector('.voto-nulo');
const branco_candidatoInfo = document.querySelector('.candidato-info');
const votoBranco = document.querySelector('.voto-branco');
const branco = document.querySelector('.branco');
const candidatoInfo = document.querySelector('.candidato-info');
const branco_btn = document.getElementById('branco');

export const cliqueBranco = (event) => {
  const el = event.target;
  if (el.classList.contains('branco')) adicionaBranco();
};

export const capturaBranco = () => {
  cliqueBranco;
  document.addEventListener('click', cliqueBranco);
};

export const bloqueiaBranco = () => {
  cliqueBranco;
  document.removeEventListener('click', cliqueBranco);
};
export const bloqueiaDigito = () => {
  cliqueDigito;
  document.removeEventListener('click', cliqueDigito);
};

export const adicionaBranco = () => {
  urna.run = true;
  urna.branco = true;
  tiraDigitosTela();
  branco_candidatoInfo.classList.remove('aparece-candidato-info');
  branco_candidatoInfo.classList.add('candidato-info');
  branco_votoNulo.classList.add('voto-nulo');
  // votoBranco.classList.remove("voto-branco");
  // votoBranco.classList.add("aparece-branco");

  if (branco_btn.classList.contains('hidden')) {
    branco_btn.classList.remove('hidden');
  }
  bloqueiaDigito();
  capturaConfirma();
};
