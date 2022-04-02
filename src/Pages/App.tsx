import React, { useState } from 'react';
import Cronometro from '../components/Cronometro/cronometro';
import Formulario from '../components/Formulario/formulario';
import Lista from '../components/Lista/lista';
import style from './App.module.scss'
import { ITarefa } from '../components/Interfaces/ITarefa';

function App() {
  const [tarefas, setTarefa] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(item => ({
      ...item,
      selecionado: item.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizaTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefa(tarefasAnteriores => tarefasAnteriores.map(item => 
      {
        if(item.id === selecionado.id){
          return {
            ...item,
            selecionado: false,
            completado: true
          }
        }
        return item;
      }
      ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefa} />
      <Lista

        selecionaTarefa={selecionaTarefa}
        tarefas={tarefas}
      />
      <Cronometro
        finalizaTarefa = {finalizaTarefa}
        selecionado={selecionado}
      />
    </div>
  );
}

export default App;
