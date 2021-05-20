import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";
import { toast } from "react-toastify";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if (response.data.length === 0) {
        // Testou acessar com um id que nao existe, navego ele pra home!
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();

    return () => {
      console.log("Componente Desmontado");
    };
  }, [history, id]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.info("Voce ja possui esse filme salvo 😉");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme Salvo Com Sucesso 😁");
  }

  if (loading) {
    return (
      <div className="film-info">
        <h1>Carregando seu filme ...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="botoes">
        <button onClick={() => salvaFilme()}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
