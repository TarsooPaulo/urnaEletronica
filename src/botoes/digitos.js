import { adicionaTela } from '../funcoes/funcoesTela';

const digito = document.querySelector('.digitos-tela');
const digitos = document.querySelectorAll('.digitos-tela');

export const cliqueDigito = (event) => {
  const el = event.target;
  if (el.classList.contains('numeros')) {
    const somNumeros = new Audio();
    somNumeros.src = '../../audios/numeros.mp3';
    somNumeros.play();
    adicionaTela(el);
  }
};

export const capturaDigito = () => {
  cliqueDigito;
  document.addEventListener('click', cliqueDigito);
};

export const bloqueiaDigito = () => {
  cliqueDigito;
  document.removeEventListener('click', cliqueDigito);
};

export const tiraDigitosTela = () => {
  // biome-ignore lint/complexity/noForEach: <explanation>
  digitos.forEach((digito) => {
    digito.classList.add('esconde-pisca');
  });
};
