import React from "react";

import "./Stories.css";

import { Avatar } from "../Avatar";

export default function Stories() {
  return (
    <div className="container">
      <section className="stories">
        <div className="stories__container">
          <Avatar
            imagem="https://images.pexels.com/photos/7499839/pexels-
            photo-7499839.jpeg?
            auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            tamanho="grande"
          />
        </div>
      </section>
    </div>
  );
}
