import { Piece } from "./pieces/Piece";

export class Table {

	constructor(
		public pieces: Piece[]
	) { }

	static validateHouse(house: string) {

		return VALID_HOUSES.indexOf(house) >= 0;
	}

	static getHSibings(position: string) {

		return [HORIZONTAL[HORIZONTAL.indexOf(position) - 1], HORIZONTAL[HORIZONTAL.indexOf(position) + 1]].filter(p => p);
	}

	static getVSibings(position: string) {

		return [VERTICAL[VERTICAL.indexOf(position) - 1], VERTICAL[VERTICAL.indexOf(position) + 1]].filter(p => p);
	}

	static getLine(number: string) {

		return HORIZONTAL.map(h => h + number);
	}

	static getColumn(letter: string) {

		return VERTICAL.map(v => letter + v);
	}

	static getRightUp(position: string): string[] {

		const [h, v] = position.split('');

		const rightUpPosition = HORIZONTAL[Table.getHorizontalPosition(h) + 1] + VERTICAL[Table.getVerticalPosition(v) + 1];

		if (Table.validateHouse(rightUpPosition)) {

			return [rightUpPosition].concat(Table.getRightUp(rightUpPosition));
		}

		return [];
	}

	static getRightDown(position: string): string[] {

		const [h, v] = position.split('');

		const rightDownPosition = HORIZONTAL[Table.getHorizontalPosition(h) + 1] + VERTICAL[Table.getVerticalPosition(v) - 1];

		if (Table.validateHouse(rightDownPosition)) {

			return [rightDownPosition].concat(Table.getRightDown(rightDownPosition));
		}

		return [];
	}

	static getLeftUp(position: string): string[] {

		const [h, v] = position.split('');

		const leftUpPosition = HORIZONTAL[Table.getHorizontalPosition(h) - 1] + VERTICAL[Table.getVerticalPosition(v) + 1];

		if (Table.validateHouse(leftUpPosition)) {

			return [leftUpPosition].concat(Table.getLeftUp(leftUpPosition));
		}

		return [];
	}

	static getLeftDown(position: string): string[] {

		const [h, v] = position.split('');

		const rightDownPosition = HORIZONTAL[Table.getHorizontalPosition(h) - 1] + VERTICAL[Table.getVerticalPosition(v) - 1];

		if (Table.validateHouse(rightDownPosition)) {

			return [rightDownPosition].concat(Table.getLeftDown(rightDownPosition));
		}

		return [];
	}

	static getHorizontalPosition(h) {

		return HORIZONTAL.indexOf(h);
	}

	static getVerticalPosition(v) {

		return VERTICAL.indexOf(v);
	}

	static getVTwice(v) {

		const index = VERTICAL.indexOf(v);

		return [VERTICAL[index - 2], VERTICAL[index + 2]].filter(v => v);
	}

	static getHTwice(v) {

		const index = HORIZONTAL.indexOf(v);

		return [HORIZONTAL[index - 2], HORIZONTAL[index + 2]].filter(v => v);
	}
}

export const VALID_HOUSES = [
	'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
	'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
	'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
	'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
	'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
	'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
	'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
	'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
];

export const HORIZONTAL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export const VERTICAL = ['1', '2', '3', '4', '5', '6', '7', '8'];