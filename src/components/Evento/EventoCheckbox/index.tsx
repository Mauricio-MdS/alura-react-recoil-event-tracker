import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  function alterarStatus(){
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo;
    setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(elemento => elemento.id === evento.id);
      return [...listaAntiga.slice(0, indice), eventoAlterado, ...listaAntiga.slice(indice +1)];
    });
  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox