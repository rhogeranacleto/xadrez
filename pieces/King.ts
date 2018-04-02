import { Piece } from './Piece';
import { Table } from '../Table';

export class King extends Piece {

	move() {


	}

	canMoveToHouses() {

		const [h, v] = this.house.split('');

		const HSiblings = Table.getHSibings(h).concat(h);
		const VSiblings = Table.getVSibings(v).concat(v);

		const houses = VSiblings.map(vSibling => {
			
			return HSiblings.map(hSibling => hSibling + vSibling);
		}).reduce((t, c) => t.concat(c), []);
		
		houses.splice(houses.indexOf(this.house), 1);

		return houses;
	}
}