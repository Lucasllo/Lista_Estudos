import style from './cronometro.module.scss';
import Botao from "../Botao/botao";
import Relogio from './Relogio/relogio';
import { ITarefa } from '../Interfaces/ITarefa';
import { useEffect, useState } from 'react';
import { converteEmSegundos } from '../common/utils/tempo';

interface props {
    selecionado: ITarefa | undefined
    finalizaTarefa: () => void
}

function Cronometro({ selecionado, finalizaTarefa }: props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(converteEmSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressao(time: number = 0) {
        setTimeout(() => {
            if (time > 0) {
                setTempo(time - 1);
                return regressao(time - 1);
            }
            console.log("acabou")
            finalizaTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                onClick={() => { regressao(tempo) }}
                texto="Iniciar"
            />
        </div>
    )
}

export default Cronometro;