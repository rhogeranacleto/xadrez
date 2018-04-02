import { Piece } from './Piece';
import { Table } from '../Table';

export class Horse extends Piece {

	canMoveToHouses() {

		const [h, v] = this.house.split('');

		const HTwices = Table.getHTwice(h);
		const VTwices = Table.getVTwice(v);
		const HSiblings = Table.getHSibings(h);
		const VSiblings = Table.getVSibings(v);

		const houses = HTwices.map(h => {

			return VSiblings.map(v => h + v);
		}).concat(VTwices.map(v => {

			return HSiblings.map(h => h + v);
		})).reduce((t, c) => t.concat(c), []);

		return houses;
	}
}