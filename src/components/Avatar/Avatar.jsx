import React from "react";

import "./Avatar.css";

const placeholder = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZyzc-hsHAcgvM1_EGJuvGDcUnhwfza1E4w&usqp=CAU"

export default function Avatar({ imagem = placeholder, selecionavel = false, tamanho = 'pequeno' }) {
  const [ativo, setAtivo] = React.useState(false);

  function controlaClique() {
    if(selecionavel){
      setAtivo(!ativo)
    }
  }
  return (
    <button
      type="button"
      className={`user__thumb ${ativo ? "user__thumb--hasNew" : ""} `}
      data-tamanho={tamanho}
      onClick={() => controlaClique()}
    >
      <img src={imagem} alt="" />
    </button>
  );
}
