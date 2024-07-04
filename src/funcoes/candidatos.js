import { capturaConfirma } from '../botoes/confirma';
import { bloqueiaDigito, tiraDigitosTela } from '../botoes/digitos';
import { adicionaInfosTela } from './funcoesTela';

const campoFoto = document.querySelector('.foto');
const nomeCandidato = document.querySelector('.nome');
const partidoCandidato = document.querySelector('.partido');
export const votoNulo = document.querySelector('.voto-nulo');

export const candidatos = [
  {
    name: 'Son Goku',
    number: 55555,
    image: './img/Son Goku.png',
    partido: 'Dragon Ball',
  },
  {
    name: 'Vegeta',
    number: 55123,
    image: './img/Vegeta.jpeg',
    partido: 'Dragon Ball',
  },
  {
    name: 'Sakuta',
    number: 56666,
    image: './img/Sakuta.jpg',
    partido: 'Bunny girl',
  },
  {
    name: 'Makinohara',
    number: 56023,
    image: './img/Makinohara.jpeg',
    partido: 'Bunny girl',
  },
  {
    name: 'Naruto Uzumaki',
    number: 12796,
    image: './img/Naruto.jpg',
    partido: 'Naruto',
  },
  {
    name: 'Sasuke Uchiha',
    number: 12751,
    image: './img/Sasuke.jpg',
    partido: 'Naruto',
  },
  {
    name: 'Satoru Gojo',
    number: 90152,
    image: './img/Satoru Gojo.jpg',
    partido: 'Jujutsu Kaisen',
  },
  {
    name: 'Yuji Itadori',
    number: 90034,
    image: './img/Yuji Itadori.png',
    partido: 'Jujutsu Kaisen',
  },
];

export const criaCandidato = (candidato, partido, img) => {
  campoFoto.setAttribute('src', img);
  nomeCandidato.innerHTML = `Nome: ${candidato}`;
  partidoCandidato.innerHTML = `Partido: ${partido}`;
  bloqueiaDigito();
  tiraDigitosTela();
  adicionaInfosTela();
};

export const candidatoOuNulo = (votos) => {
  if (votos !== null) {
    criaCandidato(votos.name, votos.partido, votos.image);
    capturaConfirma();
  } else {
    bloqueiaDigito();
    tiraDigitosTela();
    votoNulo.classList.remove('voto-nulo');
    votoNulo.classList.add('aparece-nulo');
    capturaConfirma();
  }
};
