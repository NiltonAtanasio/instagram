import React from "react";

import './Drawer.css'

export default function Drawer({ aberto = false, fecharChat}) {
  return(
    <div className='drawer' data-aberto={aberto}>
      <div className="drawer__header">
        <button 
          type="button" 
          onClick={() => fecharChat(false)}>
          Fechar
        </button>
      </div>  
      Olá, sou um drawer
    </div>
  )
}