import React from 'react';

import '../css/normalize.css';
import '../css/main.css';
import '../css/fontawesome.min.css';

/* import users from '../users.json' */
import { Avatar, Stories, Feed, Post, pegaStories } from '../components';

export function Home() {
	const [usuarios, setUsuarios] = React.useState([]);


 	React.useEffect(() => {
		fetch('https://636ad4ecb10125b78fe5bd72.mockapi.io/ap1/v1/users')
			.then((response) => response.json())
			.then((resposta) => {
				setUsuarios(resposta)
			});
	}, []); 


  return (
		<React.Fragment>
			{usuarios.length === 0
				? (<h2>Carregando...</h2>)
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

						<Feed>
							{usuarios
								.filter((usuario) => usuario.photos.length > 0)
								.map((usuario) => (
							<Post
								key={usuario.id}
								avatar={usuario.avatar}
								nome={usuario.name}
								foto={usuario.photos[0]?.picture}
								texto={usuario.photos[0]?.text}
								idUsuario={usuario.id}
							/>
							))}
						</Feed>
					</React.Fragment>
				)
			}

		</React.Fragment>
  );
}