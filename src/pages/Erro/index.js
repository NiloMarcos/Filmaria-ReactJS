import React from 'react';
import {Link} from 'react-router-dom';
import './erro.css';


export default function Erro() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina nao encontrada</h2>
            <Link to="/">Veja todos os filmes</Link>
        </div>
    )
}