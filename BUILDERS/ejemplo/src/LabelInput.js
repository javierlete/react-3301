import { useState } from 'react';
import './LabelInput.css';

export default function LabelInput({etiqueta, valorInicial, valorCambiado}) {
    const [valor, valorChange] = useState(valorInicial);
    
    function onValorCambiado(valorRecibido) {
        valorChange(valorRecibido);

        valorCambiado(valorRecibido);
    }

    return (
        <div className='LabelInput'>
            <label>{etiqueta}</label>
            <input value={valor} onInput={e => onValorCambiado(e.target.value)} />
        </div>
    );
}