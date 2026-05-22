import type { UnitOfMeasurement } from '../../infraestructure';
import type { ISelectOptions } from '../components';

export class UnitSelectsService {
	private unitOfMeasurement: UnitOfMeasurement;
	private unitsInfo: ISelectOptions[];

	constructor(unitOfMeasurement: UnitOfMeasurement) {
		this.unitOfMeasurement = unitOfMeasurement;
		this.unitsInfo = this.getUnitsInfo;
	}

	private get getUnitsInfo() {
		return this.unitOfMeasurement?.map((unit) => ({
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
