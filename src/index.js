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
    this.iniciaAcessibilidadeTeclado();
  };

  /**
   * Maps physical keyboard inputs directly to virtual buttons for exceptional
   * accessibility, including adding visual "active" state feedback.
   */
  iniciaAcessibilidadeTeclado = () => {
    document.addEventListener('keydown', (event) => {
      let targetSelector = '';

      if (event.key >= '0' && event.key <= '9') {
        targetSelector = `button.numeros[data-key="${event.key}"]`;
      } else if (event.key === 'Backspace') {
        targetSelector = 'button.corrige';
      } else if (event.key === 'Enter') {
        targetSelector = 'button.confirma';
      } else if (event.key === ' ' || event.key.toLowerCase() === 'b') {
        targetSelector = 'button.branco';
      }

      if (targetSelector) {
        const btn = document.querySelector(targetSelector);
        if (btn) {
          event.preventDefault();
          btn.classList.add('active');
          btn.click();

          // Remove tactile active state shortly after
          setTimeout(() => {
            btn.classList.remove('active');
          }, 120);
        }
      }
    });
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
