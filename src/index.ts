// types

import { GameStateI } from "./types/ChessJsProperties/GameState";

import { MovesT } from "./types/ChessJsProperties/Moves";

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
  aliveFiguresI
} from "./types/ChessJsProperties/Figures";

//helpers
import {
  createAliveStartFigures,
  createStartFigures,
  createTakenFieldsFromFigures,
  createBoardFromTakenFields
} from "./lib/helpers/index";
import { playerSideLab, turnInd } from "./lib/constants";

class ChessJs {
  private aliveFigures: aliveFiguresI;
  private deadFigures: aliveFiguresI;
  private figures: FiguresByColorI;
  private moves: MovesT;
  private takenFields: TakenFieldsI;
  private board: BoardI;
  private check: false | figuresT;
  private turn: sideIndT;
  constructor(GameState = null) {
    if (!GameState) {
      this.__initNewGame();
    } else {
      // TODO: create game from GameState
    }
  }
  // getters

  getFigures = () => this.figures;

  getBoard = () => this.board;

  getMoves = () => this.moves;

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
  };

  private __getPossibleMoves = field => {};

  private __getBoardField = (field: FieldsLabT): FieldI => {
    return this.board[field[0]][field[1]];
  };

  // private

  private __createGameState = (): GameStateI => ({
    turn: turnInd[this.turn],
    check: this.check,
    figures: this.figures,
    moves: this.moves
  });

  // setters

  private __initNewGame = () => {
    this.moves = [];
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
