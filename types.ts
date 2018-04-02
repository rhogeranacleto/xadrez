import { Color, PieceType } from "./pieces/Piece";

export interface IPiece {
	house: string;
	color: Color;
	type: PieceType;
}

enum IHouses {
	a1 = 'a1'
}