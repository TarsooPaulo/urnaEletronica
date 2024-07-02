import { capturaBranco } from './botoes/branco';
import { bloqueiaConfirma } from './botoes/confirma';
import { capturaCorrige } from './botoes/corrige';
import { capturaDigito } from './botoes/digitos';

export default class urnaEletronica {
  run = false;
  branco = false;
  confirma = false;

  inicia = () => {
    capturaDigito();
    capturaBranco();
    capturaCorrige();
    bloqueiaConfirma();
  };

  reset() {
    this.inicia();
    this.run = false;
    this.branco = false;
    this.confirma = false;
  }
}

export const urna = new urnaEletronica();
urna.inicia();
