import { IPiece } from './types';
import { Color, PieceType, Piece } from './pieces/Piece';
import { King } from './pieces/King';
import { Queen } from './pieces/Queen';
import { Bishop } from './pieces/Bishop';
import { Horse } from './pieces/Horse';
import { Tower } from './pieces/Tower';
import { Table } from './Table';

class Game {

	static start(data: IPiece[]) {

		const validHouse = data.map(piece => Table.validateHouse(piece.house)).every(valid => valid)

		if (!validHouse) {

			console.log('Não é válido!');
			return;
		}

		const pieces = data.map(piece => Game.createPiece(piece));

		pieces[0].canMoveToHouses();
		const table = new Table(pieces);
	}

	static createPiece(piece: IPiece): Piece {

		switch (piece.type) {

			case PieceType.king: return new King(piece.color, piece.house);
			case PieceType.queen: return new Queen(piece.color, piece.house);
			case PieceType.bishop: return new Bishop(piece.color, piece.house);
			case PieceType.horse: return new Horse(piece.color, piece.house);
			case PieceType.tower: return new Tower(piece.color, piece.house);
		}
	}
}

Game.start([
	{
		house: 'a1',
		color: Color.white,
		type: PieceType.queen
	}
]);