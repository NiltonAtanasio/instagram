import React from 'react';

 export function DrawerForm() {
	function enviaFormulario(event) {
		event.preventDefault();

		const name = event.target.elements.nome.value;
		const comment = event.target.elements.mensagem.value;

		fetch('https://636ad4ecb10125b78fe5bd72.mockapi.io/ap1/v1/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				comment,
			}),
		})
	}

	return (
		<footer className='drawer__footer'>
			<form onSubmit={enviaFormulario}>
				<input name="nome" type="text" placeholder="Nome" />
				<input name="mensagem" type="text" placeholder="Digite sua mensagem" />

				<button type="submit">Enviar</button>
			</form>
		</footer>
	)
} 