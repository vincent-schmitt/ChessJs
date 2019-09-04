// types

import { GameStateI } from "./types/ChessJsProperties/GameState";

import { MovesT, possibleCheckMovesI } from "./types/ChessJsProperties/Moves";

import { sideIndT } from "./types/ChessJsProperties/Side";

import {
  TakenFieldsI,
  FieldsLabT,
  FieldI
} from "./types/ChessJsProperties/Fields";

import { BoardI } from "./types/ChessJsProperties/Board";

import {
  FiguresByColorI,
  figuresT,
  aliveFiguresI,
  FigureI
} from "./types/ChessJsProperties/Figures";

//helpers
import {
  createAliveStartFigures,
  createStartFigures,
  createTakenFieldsFromFigures,
  createBoardFromTakenFields,
  getColumnAndRowFromField
} from "./lib/helpers/index";
import {
  playerSideLab,
  turnInd,
  playerSideInd,
  columnsLab
} from "./lib/constants";
import { colorIndT } from "./types/ChessJsProperties/Colors";
import { rowT } from "./types/index";

import {
  getPossiblePawnMoves,
  getPossibleRookMoves,
  getPossibleKnightMoves
} from "./lib/helpers/moveHelpers";

const getMoves = {
  P: getPossiblePawnMoves,
  R: getPossibleRookMoves,
  N: getPossibleKnightMoves
};

class ChessJs {
  private aliveFigures: aliveFiguresI;
  private deadFigures: aliveFiguresI;
  private figures: FiguresByColorI;
  private moveHistory: MovesT;
  private takenFields: TakenFieldsI;
  private board: BoardI;
  private check: false | figuresT;
  private turn: sideIndT;
  private possibleCheckMoves: possibleCheckMovesI;
  constructor(GameState = null) {
    if (!GameState) {
      this.__initNewGame();
    } else {
      // TODO: create game from GameState
    }
  }
  // getters

  getTurn = () => this.turn;

  getCheck = () => this.check;

  getFigures = () => this.figures;

  getBoard = () => this.board;

  getMoveHistory = () => this.moveHistory;

  getTakenFields = () => this.takenFields;

  getAliveFigures = () => this.aliveFigures;

  getDeadFigures = () => this.deadFigures;

  getGameState = (): GameStateI => this.__createGameState();

  getPossibleMoves = (field: FieldsLabT = null) => {
    if (field != null) {
      return this.__getPossibleMovesForField(field);
    } else {
      return this.__getAllPossibleMoves();
    }
  };

  private __getAllPossibleMoves = () => {};

  private __getPossibleMovesForField = (field: FieldsLabT) => {
    const current = this.__getBoardField(field);

    if (current.figure) {
      return this.__getPossibleMoves(current);
    }
    return null;
  };

  private __getPossibleMoves = (field: FieldI) => {
    if (this.check) {
      // TODO: figure out check moves
    } else {
      return getMoves[field.figure.type](field, this.takenFields, this.figures);
    }
  };

  private __getBoardField = (field: FieldsLabT): FieldI => {
    return this.board[field[0]][field[1]];
  };

  // private

  private __createGameState = (): GameStateI => ({
    turn: turnInd[this.turn],
    check: this.check,
    figures: this.figures,
    moves: this.moveHistory
  });

  // setters

  private __initNewGame = () => {
    this.moveHistory = [];
    this.deadFigures = { white: [], black: [] };
    this.check = false;
    this.turn = playerSideLab.white;
    this.aliveFigures = createAliveStartFigures();
    this.figures = createStartFigures();
    this.takenFields = createTakenFieldsFromFigures(this.figures);
    this.board = createBoardFromTakenFields(this.takenFields);
  };
}

export default ChessJs;
