import React from "react";

import "./Stories.css";

import { Avatar } from "../Avatar";

export default function Stories({ dados }) {
  const pegaStories = (users) => users.flatMap(({ stories }) => stories)

  return (
    <div className="container">
      <section className="stories">
        <div className="stories__container">

          {pegaStories(dados).map((story) => (
            <Avatar
              key={story.id}
              imagem={story.story}
              tamanho="grande"
              selecionavel
            />
          ))}
        </div>
      </section>
    </div>
  );
}
