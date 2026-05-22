import type { UnitOfMeasurement } from '../../infraestructure';

export class UnitService {
	private unitOfMeasurement: UnitOfMeasurement;

	constructor(unitOfMeasurement: UnitOfMeasurement) {
		this.unitOfMeasurement = unitOfMeasurement;
	}

	getUnitInstance(unitAbbr: string) {
		const instance = this.unitOfMeasurement.find(
			(unit) => unit.getAbbr === unitAbbr,
		);

		if (!instance) throw new Error('No Unit instance found');
		return instance;
	}
}
