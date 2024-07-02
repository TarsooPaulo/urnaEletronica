import { candidatoOuNulo, candidatos } from './candidatos';

export let votos = [];
export let votosValor = '';

export const votoNulo = document.querySelector('.voto-nulo');

export const checaVoto = () => {
  votosValor = votos.join('');
  const cand = candidatos.filter((c) => c.number.toString() === votosValor);
  console.log(votos);
  console.log(votosValor);
  if (cand.length) {
    candidatoOuNulo(cand[0]);
  } else {
    candidatoOuNulo(null);
  }
};

export const zeraVotos = () => {
  votos = [];
  votosValor = '';
};
