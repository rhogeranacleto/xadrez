import { Piece } from './Piece';
import { Table } from '../Table';

export class Queen extends Piece {

	canMoveToHouses() {
	
		const [h, v] = this.house.split('');

		const houses = Table.getLine(v).concat(Table.getColumn(h)).concat(Table.getRightUp(this.house)).concat(Table.getRightDown(this.house)).concat(Table.getLeftUp(this.house)).concat(Table.getLeftDown(this.house));

		return houses;
	}
}