import React from "react";
import style from './botao.module.scss'
interface props {
    texto: string,
    tipo ?: "button" | "submit" | "reset" | undefined,
    onClick ? : () => void
}

function Botao({ texto, tipo="button", onClick }: props) {
    return (
        <button onClick={onClick} type={tipo} className={style.botao}>
            {texto}
        </button>
    )
}

export default Botao;