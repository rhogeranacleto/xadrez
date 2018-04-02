import { Piece } from './Piece';
import { Table } from '../Table';

export class Bishop extends Piece {

	canMoveToHouses() {
	
		const rightUps = Table.getRightUp(this.house);
		const rightDowns = Table.getRightDown(this.house);
		const leftUp = Table.getLeftUp(this.house);
		const leftDowns = Table.getLeftDown(this.house);

		const houses = rightUps.concat(rightDowns).concat(leftUp).concat(leftDowns);
		
		return houses;
	}
}