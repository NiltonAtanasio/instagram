import React from "react";

import { Avatar } from "../Avatar";

export default function Feed({ dados }) {
  return (
    <div className="container">
      <section className="feed">
        <article className="post">
          <header className="post__header">
            <div className="user">
              <Avatar
                imagem="https://images.pexels.com/photos/7499839/pexels-
                photo-7499839.jpeg?
                auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <a href="/" className="user__name">
                Atanazzio :D
              </a>
            </div>

            <button className="post__context">
              <i className="fas fa-ellipsis-h"></i>
            </button>

            <figure className="post__figure">
              <img src="/" alt="" />
            </figure>

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
                <Avatar
                  imagem="https://images.pexels.
                  com/photos/7499839/pexels-
                  photo-7499839.jpeg?
                  auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  tamanho="pequeno"
                />

                <span>
                  curtido por <a href="/">Domino</a> e outras
                  <a href="/">7 pessoas</a>
                </span>
              </div>
            </div>
          </header>
        </article>
      </section>
    </div>
  );
}
