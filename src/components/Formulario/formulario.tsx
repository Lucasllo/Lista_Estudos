import React from "react";
import Botao from "../Botao/botao";
import style from './formulario.module.scss'
import { ITarefa } from "../Interfaces/ITarefa";
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
interface props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: props) {
    const [state, setState] = useState({
        tarefa: "",
        tempo: "00:00",
    });

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(
            tarefasAntigas => [
                ...tarefasAntigas,
                {
                    ...state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    value={state.tarefa}
                    onChange={e => setState({ ...state, tarefa: e.target.value })}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={state.tempo}
                    onChange={e => setState({ ...state, tempo: e.target.value })}
                    min="00:00:00"
                    max="01:30:00"
                />
            </div>
            <Botao
                tipo="submit"
                texto="Adicionar"
            />
        </form>
    )
}

export default Formulario;