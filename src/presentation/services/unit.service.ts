import type { UnitsOfMeasurement } from '../../infraestructure';

export class UnitService {
	private measurement: string;
	private unitsOfMeasurement: UnitsOfMeasurement;

	constructor(measurement: string, unitOfMeasurement: UnitsOfMeasurement) {
		this.measurement = measurement;
		this.unitsOfMeasurement = unitOfMeasurement;
	}

	getUnitInstance(unitAbbr: string) {
		const instance = this.unitsOfMeasurement.find(
			(unit) => unit.getAbbr === unitAbbr,
		);

		if (!instance) throw new Error('No Unit instance found');
		return instance;
	}

	get getMeasurement() {
		return this.measurement;
	}
}
