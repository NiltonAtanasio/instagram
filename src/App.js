import React from 'react';

import './css/fontawesome.min.css'
import './css/normalize.css'
import './css/main.css'

import { Topbar, Stories, Feed, Drawer, Avatar, pegaStories } from './components';

function App() {
  const [drawerAberto, setDrawerAberto] = React.useState(false)
  const [usuarios, setUsuarios] = React.useState([])

  React.useEffect(() => {
    fetch("https://636ad4ecb10125b78fe5bd72.mockapi.io/ap1/v1/user")
      .then((response) => response.json())
      .then((resposta) => setUsuarios(resposta))
  }, [])



  return (
    <React.Fragment>
      <Drawer aberto={drawerAberto} fecharChat={setDrawerAberto} />

      <Topbar abrirChat={setDrawerAberto} />

      {usuarios.length === 0
        ? ('carregando...')
        : (
            <React.Fragment>
              <Stories>
                {pegaStories(usuarios).map((story) => (
                  <Avatar 
                    key={story.id}
                    imagem={story.story}
                    tamanho="grande"
                    selecionavel={true}
                  />
                ))}
              </Stories>

              <Feed dados={usuarios} />

            </React.Fragment>
        )
      }

    </React.Fragment>
  );
}

export default App;
