import { columnLabT, rowT } from "../index";
import { FieldI } from "./Fields";

export type BoardI = { [key in columnLabT]: { [key in rowT]: FieldI } };
