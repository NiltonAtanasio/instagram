import React from "react";
import { Link } from 'react-router-dom'
import { Avatar } from "../Avatar";

const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucaZx_5ilAhuxxb9dw268yscUKX_ZQivmXqkoS-E&s'

export default function Post({ avatar, nome, foto = placeholder, texto = '', idUsuario }) {
	return (
		<article className="post">
			<header className="post__header">
				<div className="user">

					<Avatar
						imagem={avatar}
						/>

					<Link to={`/usuario/${idUsuario}`} className="user__name">{nome}</Link>
				</div>

				<button className="post__context">
					<i className="fas fa-ellipsis-h"></i>
				</button>
			</header>

			<figure className="post__figure">
				<img src={foto} alt={texto} />
			</figure>

			<div className="post__text">
				<h4>{texto}</h4>
			</div>

			<nav className="post__controls">
				<button className="post__control">
					<i className="far fa-heart"></i>
				</button>

				<button className="post__control">
					<i className="far fa-comment"></i>
				</button>

				<button className="post__control">
					<i className="far fa-bookmark"></i>
				</button>
			</nav>

			<div className="post__status">
				<div className="user">

				<Avatar imagem={avatar} tamanho="pequeno" />

					<span>
					curtido por <a href="/">Domino</a> e outras <a href="/">7 pessoas</a>
				</span>
				</div>
			</div>
		</article>
	)
}
