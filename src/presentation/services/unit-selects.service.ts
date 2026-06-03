import type { UnitsOfMeasurement } from '../../infraestructure';
import type { ISelectOptions } from '../components';

export class UnitSelectsService {
	private unitsOfMeasurement: UnitsOfMeasurement;
	private unitsInfo: ISelectOptions[];

	constructor(unitOfMeasurement: UnitsOfMeasurement) {
		this.unitsOfMeasurement = unitOfMeasurement;
		this.unitsInfo = this.getUnitsInfo;
	}

	private get getUnitsInfo() {
		return this.unitsOfMeasurement?.map((unit) => ({
			value: unit.getAbbr,
			text: unit.getName,
		}));
	}

	get getFromUnits() {
		return this.unitsInfo;
	}

	getToUnits(fromUnit: string) {
		return this.unitsInfo?.filter((unit) => unit.value !== fromUnit);
	}
}
