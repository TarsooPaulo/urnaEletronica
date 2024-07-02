import { urna } from '../main';
import { bloqueiaBranco } from './branco';
import { bloqueiaConfirma } from './confirma';
import { bloqueiaCorrige } from './corrige';
import { bloqueiaDigito } from './digitos';

export const bloqueiaTodosBotoes = () => {
  bloqueiaDigito();
  bloqueiaConfirma();
  bloqueiaBranco();
  bloqueiaCorrige();
};
