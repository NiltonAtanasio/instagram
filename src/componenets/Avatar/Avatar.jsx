import React from "react";

import "./Avatar.css";
/* "user__thumb user__thumb--hasNew"*/
export default function Avatar(props) {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <button
      type="button"
      className={`user__thumb ${ativo ? "user__thumb--hasNew" : ""} `}
      data-tamanho={props.tamanho}
      onClick={() => setAtivo(!ativo)}
    >
      <img src={props.imagem} alt="" />
    </button>
  );
}
