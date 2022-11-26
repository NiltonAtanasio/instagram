import React from 'react';

export function DrawerContent() {
	const [mensagens, setMensagens] = React.useState([]);

	async function buscarMensagens() {
		fetch('https://636ad4ecb10125b78fe5bd72.mockapi.io/ap1/v1/chat')
			.then(response => response.json())
			.then(data => setMensagens(data));
	}


	React.useEffect(() => {
		let intervalo = setInterval(() => buscarMensagens(), 5000);

		return () => clearInterval(intervalo);
	});


	return (
		<div className='drawer__content'>
			{mensagens.length
				? mensagens.map((mensagem) => (
					<div
						key={mensagem.id}
						className='drawer__message'
					>
						<h4>{mensagem.name}</h4>

						<p>{mensagem.comment}</p>
					</div>
				))
				: 'Nenhuma mensagem'}
		</div>
	)
}