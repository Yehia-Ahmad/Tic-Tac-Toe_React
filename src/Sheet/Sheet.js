import React from "react";
import "./Sheet.css";
import { useDispatch, useSelector } from "react-redux";
import { xActions } from "../Store/XSlice";
import { oActions } from "../Store/OSlice";

const Sheet = () => {
  const xSlice = useSelector((state) => state.XSlice.xTurn);
  const oSlice = useSelector((state) => state.OSlice.oTurn);
  const disPatch = useDispatch();

  const resetHandler = () => {
    window.location.reload();
  };

  const addX = (e) => {
    const textNode = document.createTextNode("X");
    e.appendChild(textNode);
  };

  const addO = (e) => {
    const textNode = document.createTextNode("O");
    e.appendChild(textNode);
  };

  const checkHorizontalWinner = () => {
    const cellOne = document.getElementById("cell-1").textContent;
    const cellTwo = document.getElementById("cell-2").textContent;
    const cellThree = document.getElementById("cell-3").textContent;
    const cellFour = document.getElementById("cell-4").textContent;
    const cellFive = document.getElementById("cell-5").textContent;
    const cellSix = document.getElementById("cell-6").textContent;
    const cellSeven = document.getElementById("cell-7").textContent;
    const cellEight = document.getElementById("cell-8").textContent;
    const cellNine = document.getElementById("cell-9").textContent;
    if (cellOne === cellTwo) {
      if (cellOne === cellThree) {
        document.getElementById("cell-1").classList.add("winner");
        document.getElementById("cell-2").classList.add("winner");
        document.getElementById("cell-3").classList.add("winner");
      }
    } else if (cellFour === cellFive) {
      if (cellFive === cellSix) {
        document.getElementById("cell-4").classList.add("winner");
        document.getElementById("cell-5").classList.add("winner");
        document.getElementById("cell-6").classList.add("winner");
      }
    } else if (cellSeven === cellEight) {
      if (cellSeven === cellNine) {
        document.getElementById("cell-7").classList.add("winner");
        document.getElementById("cell-8").classList.add("winner");
        document.getElementById("cell-9").classList.add("winner");
      }
    }
  };

  const onClickHandler = (e) => {
    const el = e.target;
    if (el.className !== "game-cell block") {
      // console.log(xSlice);
      // console.log(oSlice);
      el.classList.add("block");
      // console.log(el.className);
      if (xSlice) {
        addX(el);
        disPatch(xActions.OTurn());
        disPatch(oActions.OTurn());
      } else if (oSlice) {
        addO(el);
        disPatch(xActions.xTurn());
        disPatch(oActions.xTurn());
      }

      // Vertical;
      checkHorizontalWinner();
      console.log(el);
    }
  };

  return (
    <div className="containers">
      <div className="header">
        <h2>
          Tic <span className="tac">Tac</span> Toe
        </h2>
        <div className="Statu-Action">
          <p className="Status">{xSlice ? "X Player Turn" : "O Player Turn"}</p>
          <button className="btn-Reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
      <div className="game-grid">
        <div className="game-cell" id="cell-1" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-2" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-3" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-4" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-5" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-6" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-7" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-8" onClick={onClickHandler}></div>
        <div className="game-cell" id="cell-9" onClick={onClickHandler}></div>
      </div>
    </div>
  );
};

export default Sheet;
