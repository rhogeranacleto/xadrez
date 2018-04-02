export abstract class Piece {

	constructor(
		public color: Color,
		public house: string
	) { }

	// abstract move(): void;

	abstract canMoveToHouses(): string[];
}

export enum Color {
	white = 'white',
	black = 'black'
}

export enum PieceType {
	king = 'king',
	queen = 'queen',
	bishop = 'bishop',
	horse = 'horse',
	tower = 'tower'
}