import { FieldsLabT } from "./Fields";

export type MovesT = string[];

type possibleMovesT = FieldsLabT[];

export type possibleCheckMovesI = { [key in FieldsLabT]?: possibleMovesT };
