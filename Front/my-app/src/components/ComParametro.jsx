import React from "react";

export default (
  props //criamso uma funcao que recebe parametro
) => (
  //estamos passando o parametro e seu conteudo com o param.
  <>
    <h3>{props.titulo}</h3>
    <p>{props.subtitulo}</p>
  </>
);
