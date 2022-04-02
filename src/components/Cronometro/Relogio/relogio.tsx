import style from './relogio.module.scss';
interface props{
    tempo: number | undefined
}

function Relogio({tempo = 0}: props){
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [dezenaMinuto, unidadeMinuto] = String(minutos).padStart(2,"0");
    const [dezenasegundo, unidadesegundo] = String(segundos).padStart(2,"0");

    return(
        <>
            <span className={style.relogioNumero}>{dezenaMinuto}</span> 
            <span className={style.relogioNumero}>{unidadeMinuto}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{dezenasegundo}</span>
            <span className={style.relogioNumero}>{unidadesegundo}</span>
        </>
    )
}

export default Relogio;