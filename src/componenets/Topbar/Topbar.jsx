import React from "react";  

import instagramlogo from "./instagram-logo.svg"

import './Topbar.css'

export default function Topbar() {
  return (
    <herader className="topbar">
      <div className="container">
        <a href="/" className="topbar__logo">
          <img src={instagramlogo} alt="instagram logo" />
        </a>

        <button className="topbar__icon">
          <i className="far fa-paper-plane"></i>
        </button>
      </div>
    </herader>
  )
}