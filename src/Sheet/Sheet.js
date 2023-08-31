import React from "react";
import "./Sheet.css";

const Sheet = () => {
  return (
    <div class="containers">
      <div className="header">
        <h2>
          Tic <span className="tac">Tac</span> Toe
        </h2>
        <div className="Statu-Action">
          <p className="Status">x is next</p>
          <button className="btn-Reset">Reset</button>
        </div>
      </div>
      <div className="game-grid">
        <div className="game-cell" id="cell-1"></div>
        <div className="game-cell" id="cell-2"></div>
        <div className="game-cell" id="cell-3"></div>
        <div className="game-cell" id="cell-4"></div>
        <div className="game-cell" id="cell-5"></div>
        <div className="game-cell" id="cell-6"></div>
        <div className="game-cell" id="cell-7"></div>
        <div className="game-cell" id="cell-8"></div>
        <div className="game-cell" id="cell-9"></div>
      </div>
    </div>
  );
};

export default Sheet;
