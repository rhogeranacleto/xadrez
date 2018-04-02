import { Piece } from './Piece';
import { Table } from '../Table';

export class Tower extends Piece {

	canMoveToHouses() {

		const [h, v] = this.house.split('');

		const houses = Table.getLine(v).concat(Table.getColumn(h));

		houses.splice(houses.indexOf(this.house), 1);
		houses.splice(houses.indexOf(this.house), 1);

		console.log(houses);

		return houses;
	}
}