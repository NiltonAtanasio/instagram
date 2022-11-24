import React from "react";

import './Drawer.css'

export default function Drawer({ aberto = false, fecharChat}) {
  function enviaFormulario(event) {
    event.preventDefault()
    const nome = event.target.elements.nome.value
    const mensagem = event.target.elements.mensagem.value
  }
  
  
  return(
    <div className='drawer' data-aberto={aberto}>
      <div className="drawer__header">
        <button 
          type="button" 
          onClick={() => fecharChat(false)}>
          Fechar
        </button>
      </div>  

      <div className="drawer__cpntent">
      Olá, sou um drawer
      </div>

      <footer className="drawer__footer">
        <form onSubmit={enviaFormulario}>
          <input type="text" name="nome" placeholder="Nome" />
          <input type="text" name="mensagem" placeholder="Digite sua mensagem" />

          <button type="submit">Enviar</button>
        </form>
      </footer>
    </div>
  )
}