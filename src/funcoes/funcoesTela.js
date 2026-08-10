import { checaVoto, votos, votosValor } from './votos';

export const candidatoInfo = document.querySelector('.candidato-info');
export const telaUrna = document.querySelector('.tela-urna');
export let pisca = document.querySelector('.pisca');

export const adicionaTela = (el) => {
  if (pisca) {
    const key = el.getAttribute('data-key');
    pisca = document.querySelector('.pisca');
    pisca.innerText += key;
    if (pisca.nextElementSibling?.classList.contains('digitos-tela')) {
      pisca.nextElementSibling.classList.add('pisca');
      pisca.classList.remove('pisca');
    }
    pisca = document.querySelector('.pisca');
    votos.push(key);

    if (votos.length === 5) {
      checaVoto();
    }
  }
};

export const adicionaInfosTela = () => {
  candidatoInfo.classList.remove('candidato-info');
  candidatoInfo.classList.add('aparece-candidato-info');
};
