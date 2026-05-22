import { Unit } from './unit.ts';

export class UnitConverter {
	private fromUnit?: Unit;

	public setFromUnit(fromUnit: Unit) {
		this.fromUnit = fromUnit;
	}

	public convert(value: number, toUnit: string) {
		if (!this.fromUnit) throw new Error('No Unit defined');

		const conversion = this.fromUnit.convert(value, toUnit);
		return conversion;
	}
}
